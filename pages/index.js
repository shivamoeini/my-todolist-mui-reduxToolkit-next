"use client"
import DisplayTodos from "../components/DisplayTodos";
import Todos from "../components/Todos";

import { motion } from "framer-motion";



export default function Home() {
  return (
    
      <div className="App">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Todo App
        </motion.h1>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos />
          <DisplayTodos />
        </motion.div>
      </div>
    );
  
}
