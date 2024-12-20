import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/icon.png";
import onboarding2 from "@/assets/images/icon.png";
import onboarding3 from "@/assets/images/icon.png";
import signUpPan from "@/assets/images/signUpPan.png";
import recipeOfTheDay from "@/assets/images/stir-fry lamb.png";
import dice from "@/assets/images/dice.png";
import breakfast from "@/assets/images/breakfast.png";
import lunch from "@/assets/images/lunch.png";
import dinner from "@/assets/images/dinner.png";
import desserts from "@/assets/images/dessert.png";
import snacks from "@/assets/images/snacks.png";

export const images = {
    recipeOfTheDay,
    onboarding1,
    onboarding2,
    onboarding3,
    getStarted,
    signUpPan,
    check,
    noResult,
    message,
    dice,
    breakfast,
    lunch,
    dinner,
    desserts,
    snacks,
};

export const icons = {
    arrowDown,
    arrowUp,
    backArrow,
    chat,
    checkmark,
    close,
    dollar,
    email,
    eyecross,
    google,
    home,
    list,
    lock,
    map,
    marker,
    out,
    person,
    pin,
    point,
    profile,
    search,
    selectedMarker,
    star,
    target,
    to,
};

export const categories = [
    {
      id: '1',
      name: 'Breakfast',
      image: images.breakfast // Replace with actual category images
    },
    {
      id: '2',
      name: 'Lunch',
      image: images.lunch
    },
    {
      id: '3',
      name: 'Dinner',
      image: images.dinner
    },
    {
      id: '4',
      name: 'Desserts',
      image: images.desserts
    },
    {
      id: '5',
      name: 'Snacks',
      image: images.snacks
    }
  ];

export const COOKBOOKS = [
    {
      id: '1',
      name: 'Weekend Favorites',
      recipeCount: 12,
      coverImage: images.recipeOfTheDay,
      description: 'Perfect recipes for lazy weekends'
    },
    {
      id: '2',
      name: 'Quick & Easy',
      recipeCount: 8,
      coverImage: images.desserts,
      description: '30 minutes or less'
    },
    {
      id: '3',
      name: 'Italian Cuisine',
      recipeCount: 15,
      coverImage: images.dinner,
      description: 'Classic Italian recipes'
    },
   ];

export const POSTS = [
    {
      id: '1',
      user: {
        name: 'John Doe',
        avatar: `${images.onboarding1}`,
        username: 'johndoe'
      },
      content: 'Just made this amazing lamb dish! 🍖',
      image: `${images.recipeOfTheDay}`,
      likes: 125,
      comments: 14,
      timeAgo: '2h',
      isLiked: false
    },
    // Add more posts...
  ]; 

  export const socialFilters = [
    {
        id: '1',
        name: 'Trending',
        emoji: '🔥'
    },
    {
        id: '2',
        name: 'New',
        emoji: '🌟'
    },
    {
        id: '3',
        name: 'Most Liked',
        emoji: '👍'
    },
    {
        id: '4',
        name: 'Friends',
        emoji: '💞'
    },
  ]; 

export const onboarding = [
    {
        id: 1,
        title: "Welcome to Servery!",
        description:
            "Let's get you started.",
        image: images.onboarding1,
    },
    {
        id: 2,
        title: "The perfect recipe is just a tap away!",
        description:
            "Your journey begins with Servery. Find your ideal recipe effortlessly.",
        image: images.onboarding1,
    },
    {
        id: 3,
        title: "Best food in your hands with Servery",
        description:
            "Discover the convenience of finding your favorite recipes with Servery",
        image: images.onboarding2,
    },
    {
        id: 4,
        title: "Your kitchen, your way. Let's cook!",
        description:
            "Search for recipes, make cookbooks, and connect with foodies all over the world.",
        image: images.onboarding3,
    },
];

export const data = {
    onboarding,
};