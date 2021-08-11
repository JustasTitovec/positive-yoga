import reviewPhoto1 from './assets/reviewPhoto1.svg';
import reviewPhoto2 from './assets/reviewPhoto2.svg';
import reviewPhoto3 from './assets/reviewPhoto3.svg';

import plan from './assets/plan.svg';
import exercise from './assets/exercise.svg';
import shoe from './assets/shoe.svg';
import diet from './assets/diet.svg';
import whistle from './assets/whistle.svg';
import watch from './assets/watch.svg';
import bookCheck from './assets/bookCheck.svg';

import checkCircle from './assets/checkCircle.svg';

const data = {
  successStories: [
    {
      name: 'Emily, 28',
      place: 'Delaware, NJ',
      ratingValue: 5,
      personImg: reviewPhoto1,
      story:
        'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts',
      id: 123123,
    },
    {
      name: 'Kylie, 40',
      place: 'Los Angeles',
      ratingValue: 5,
      personImg: reviewPhoto2,
      story:
        'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.',
      id: 786234,
    },
    {
      name: 'Jesica, 51',
      place: 'San Francisco, CA',
      ratingValue: 5,
      personImg: reviewPhoto3,
      story:
        'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.',
      id: 982374,
    },
  ],
  plansTypes: [
    {
      planDurationMonths: 6,
      monthPrice: 9.99,
      priceWithoutDiscount: 119.94,
      id: 23454,
    },
    {
      planDurationMonths: 3,
      monthPrice: 14.99,
      priceWithoutDiscount: 59.97,
      id: 90843,
    },
    {
      planDurationMonths: 1,
      monthPrice: 19.99,
      priceWithoutDiscount: 19.99,
      id: 13458,
    },
  ],
  subscriptionAdvantages: [
    {
      ImgSrc: plan,
      title: 'A personalized yoga program',
      subtitle: 'Completely safe and focused on your key goals',
    },
    {
      ImgSrc: exercise,
      title: 'Easy & enjoyable yoga workouts for your level',
      subtitle: 'Program adjusts to your level and pace',
    },
    {
      ImgSrc: shoe,
      title: 'No special preparation needed',
      subtitle:
        'Perfect for begginners! Requires no special preparation or equipment',
    },
    {
      ImgSrc: diet,
      title: 'Daily motivation & accountability',
      subtitle:
        'Track your progress, develop a healthy routine, reach goals faster',
    },
    {
      ImgSrc: whistle,
      title: 'Browse from various yoga challenges',
      subtitle:
        '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
    },
    {
      ImgSrc: watch,
      title: 'Easy access on any device',
      subtitle: 'Do your yoga anywhere across all types of devices',
    },
    {
      ImgSrc: bookCheck,
      title: 'A complete guide to get started',
      subtitle:
        'Best tips, guidelines, advice, and recommendations for successful practice',
    },
  ],
  appCheckList: [
    {
      checkImage: checkCircle,
      checkItemDescription: 'Each program adapts to your age or fitness level',
    },
    {
      checkImage: checkCircle,
      checkItemDescription: 'Mindful way to exercise and get real results',
    },
    {
      checkImage: checkCircle,
      checkItemDescription: 'Effective and long-term lasting results',
    },
    {
      checkImage: checkCircle,
      checkItemDescription:
        'Suited activities that benefit both the mind and body',
    },
    {
      checkImage: checkCircle,
      checkItemDescription: 'Low-intensity but highly-effective workouts',
    },
    {
      checkImage: checkCircle,
      checkItemDescription: 'Extra attention to muscle, joint and back health',
    },
  ],
};

export default data;
