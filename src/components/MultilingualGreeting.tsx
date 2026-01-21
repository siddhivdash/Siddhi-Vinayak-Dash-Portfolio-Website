import { useState, useEffect } from "react";

const greetings = [
  { text: "Hello, I'm Siddhi", lang: "English" },
  { text: "Hallo, ich bin Siddhi", lang: "German" },
  { text: "Ciao, sono Siddhi", lang: "Italian" },
  { text: "Hola, soy Siddhi", lang: "Spanish" },
  { text: "Bonjour, je suis Siddhi", lang: "French" },
  { text: "こんにちは、私は Siddhi です", lang: "Japanese" },
  { text: "Привет, меня зовут Siddhi", lang: "Russian" },
  { text: "你好，我是 Siddhi", lang: "Chinese" },
  { text: "שלום אני Siddhi", lang: "Hebrew" },
];

const MultilingualGreeting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let pauseTimer: NodeJS.Timeout;
    
    const currentGreeting = greetings[currentIndex].text;
    
    if (isTyping) {
      // Typing animation
      if (displayText.length < currentGreeting.length) {
        typingTimer = setTimeout(() => {
          setDisplayText(currentGreeting.slice(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        // Finished typing, pause before erasing
        pauseTimer = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
      }
    } else {
      // Erasing animation
      if (displayText.length > 0) {
        typingTimer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Erasing speed (faster)
      } else {
        // Finished erasing, move to next greeting
        setCurrentIndex((prev) => (prev + 1) % greetings.length);
        setIsTyping(true);
      }
    }

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(pauseTimer);
    };
  }, [displayText, isTyping, currentIndex]);

  // Cursor blinking animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="inline-block min-w-[300px] md:min-w-[500px]">
      <span className="gradient-text text-3xl md:text-5xl lg:text-6xl font-bold">
        {displayText}
        <span 
          className={`inline-block w-1 h-8 md:h-12 lg:h-14 bg-primary ml-1 transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </span>
    </div>
  );
};

export default MultilingualGreeting;
