import React, { useEffect, useState, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";

import {
  Card,
  CircularProgress,
  Grid,
  Typography,
  Box,
  TextField,
} from "@mui/material";

import {

  AI_PROMPT_HOME,
  SelectMealMembers,
  MealTime,
} from "@/constants/options";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,

} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { chatSession } from "@/service/AIModal";
import Header from "@/components/custom/Header";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CreateForm = () => {
  const [type, setType] = useState("");
  const [activeTraveler, setActiveTraveler] = useState(""); // State to manage active category
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [mealTypes, setMealTypes] = React.useState("");


  const [openToast, setOpenToast] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const [formData, setFormData] = useState({
    meal: "",
    meal_time: "",
    people: "",
  });

  const frameworks = [
    {
      value: "turkish",
      label: "Turkish",
    },
    {
      value: "nigerian",
      label: "Nigerian",
    },
    {
      value: "swedish",
      label: "Swedish",
    },
    {
      value: "italian",
      label: "Italian",
    },
    {
      value: "japanese",
      label: "Japanese",
    },

    {
      value: "American",
      label: "American",
    },

    {
      value: "Jamacian",
      label: "Jamcian",
    },

    {
      value: "Indian",
      label: "Indian",
    },

    {
      value:"Filipino",
      label:"Filipino",
    },

    {
      value:"Ecudorian",
      label:"Ecudorian",
    },





  ];

  const [activeCategory, setActiveCategory] = useState("");

  const handleMeal = (name, value) => {
    setActiveTraveler(value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setActiveCategory(value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("Form Data", formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => GetUserProfile(codeResponse),
    onError: (error) => console.log(error),
  });



  const GetUserProfile = async (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response?.data));
        setOpenDialog(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const SaveMeal = async (MealData) => {
    setLoading(true);
    const docId = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));

    await setDoc(doc(db, "Meal Idea", docId), {
      userSelection: formData,
      mealData: JSON?.parse(MealData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-meal/" + docId);
  };

  const onGenerateMeal = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      !formData?.meal ||
      !formData?.meal_time ||
      !formData?.people
    ) {
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 4000);

      console.log("ERROR");
    }
    // Assuming formData is already available
    // else {
    else{
      console.log("all good")
    
      setLoading(true);
      const FINAL_PROMPT = AI_PROMPT_HOME.replace("{meal_time}", formData?.meal_time)
        .replace("{meal}", formData?.meal)
        .replace("{people}", formData?.people);

      console.log("Form Data", formData);
      console.log("FINAL PROMPT", FINAL_PROMPT);
 
      // Call chatSession function with the final prompt
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      setLoading(false);
      SaveMeal(result?.response?.text());
      console.log("Result Text", result?.response?.text());
    }
  };

  return (
    <>
      <Header />
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 ">
        <h2 className="font-bold text-3xl">
          Let's Create the Perfect Home Cooked Meal
        </h2>

        <div className="mt-20 flex flex-col gap-9">
          <div>
            <h2 className="text-xl my-1 font-medium">Select Meal</h2>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-1">
            {MealTime.map((item, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow ${
                  activeCategory === item.title
                    ? "border-rose-600 border-4"
                    : ""
                }`}
                onClick={() => handleInputChange("meal_time", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl my-1 font-medium">
              Choose a Type of Cusuine
            </h2>
          </div>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[300px] justify-between"
              >
                {mealTypes
                  ? frameworks.find(
                      (framework) => framework.value === mealTypes
                    )?.label
                  : "Select meal type.."}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search Meal Type.."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No meal found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                       
                        onSelect={(currentValue) => {
                          setMealTypes(
                            currentValue === mealTypes ? "" : currentValue
                          );
                          handleMeal("meal", currentValue);
                          
                          setOpen(false);
                        }}
                      >
                        {framework.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            mealTypes === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div>
            <h2 className="text-xl my-1 font-medium">
              Who are you eating with?
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-1">
            {SelectMealMembers.map((item, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow ${
                  activeTraveler === item.title
                    ? "border-rose-600 border-4"
                    : ""
                }`}
                onClick={() => handleMeal("people", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="my-20 justify-center flex">
          <Button disabled={loading} size="lg" onClick={() => onGenerateMeal()}>
            {loading ? <CircularProgress size={20} /> : "Generate Meal"}
          </Button>
        </div>

            
        <Snackbar
        open={openToast}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Please fill all fields"
      />
   

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <h2 className="font-bold text-lg mt-7">Sign in with Google</h2>
                <p className="text-gray-500">Please sign in to continue.</p>
                <Button
                  onClick={login}
                  className="w-full mt-5 flex gap-4 items-center"
                >
                  <FcGoogle />
                  Sign in with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CreateForm;
