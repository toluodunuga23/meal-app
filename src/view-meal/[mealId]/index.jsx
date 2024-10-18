import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { AiOutlineClockCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import Header from '@/components/custom/Header';
import { FaBowlFood } from "react-icons/fa6";
import useSearchVideo from "../../hooks/useSearchVideo";

const ViewMeal = () => {
  const [mealData, setMealData] = useState(null);
  const { mealId } = useParams();
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [videoTitle, setVideoTitle] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoEmbed, setVideoEmbed] = useState(null);

  // Call the useSearchVideo hook here, so it's inside the component
  const getVideo = useSearchVideo(videoTitle);

  // Fetch meal data when mealId changes
  useEffect(() => {
    if (mealId) {
      GetMealData();
    }
  }, [mealId]);

  // Handle video search result
  useEffect(() => {
    if (getVideo.video) {
      setVideoEmbed(getVideo.video[0].id.videoId);
    }
  }, [getVideo.video]);

  // Set video title when meal data is fetched
  useEffect(() => {
    if (mealData) {
      setVideoTitle(mealData?.mealData?.meal);
    }
  }, [mealData]);

  const GetMealData = async () => {
    const docRef = doc(db, 'Meal Idea', mealId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setMealData(docSnap.data());
    } else {
      toast.error('No such document!');
    }
  };

  const handleCheckIngredient = (index) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>

      <Header />
      {videoEmbed && (
        <div className="container mx-auto p-4">
          {mealData && (
            <>
              {/* Hero section for the meal name */}
              <div className="meal-header text-center py-4">
                <h1 className="text-3xl font-bold">{mealData?.mealData?.meal}</h1>
                <p className="text-gray-600">{mealData?.mealData?.description}</p>
              </div>

              {/* Quick info section */}
              <div className="quick-info flex flex-col text-center">
                <div className="info-item  rounded-md px-2 mt-4 text-left ">
                  <AiOutlineClockCircle className="inline-block text-xl mr-2 " />
                  <span>{mealData?.mealData?.prepTime}</span>
                </div>
                <div className="flex justify-start mt-4 ml-2">
                  <FaBowlFood className="text-xl mr-2 flex justify-start " />
                  <span className=''>Serving Size: {mealData?.mealData?.servingSize}</span>
                </div>
              </div>

              {/* Ingredients list with checkboxes */}
              <div className="ingredients my-6">
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul>
                  {mealData?.mealData?.ingredients?.map((item, index) => (
                    <li
                      key={index}
                      className={`mb-2 ${checkedIngredients[index] ? 'line-through' : ''
                        }`}
                      onClick={() => handleCheckIngredient(index)}
                    >
                      <AiOutlineCheckCircle
                        className={`inline-block text-lg mr-2 ${checkedIngredients[index] ? 'text-green-500' : ''
                          }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions section */}
              <div className="instructions my-6">
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <p>{mealData?.mealData?.instructions}</p>
              </div>

              {/* Social sharing buttons */}
              {/* <div className="share-buttons text-center my-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Share on Instagram
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full ml-2">
              Share on TikTok
            </button>
          </div> */}

              {/* Video section */}
              <div className="instructions my-6">
                <h2 className="text-xl font-semibold mb-2">Video Tutorial</h2>
              </div>
              <iframe
                className="w-full h-80 md:h-[500px] lg:h-[600px]"
                src={`https://www.youtube.com/embed/${videoEmbed}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>


            </>
          )}
        </div>
      )
      }
    </>

  );
};

export default ViewMeal;
