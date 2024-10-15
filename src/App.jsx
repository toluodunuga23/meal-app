// App.js
import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, ThemeProvider } from "@mui/material";
import Header from './components/custom/Header';
import theme from "./Theme"; // Import your theme
import { Button } from "./components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import "./App.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Hero from "./components/custom/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <>
<Header />
 <Hero />


 
  
   
  
    </>
  );
}

export default App;
