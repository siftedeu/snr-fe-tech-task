const fetchFromDatoCms = async () => {
  return {
    careersPage: {
      seo: {
        description:
          "If you had the chance to build/create the go-to platform for all things startup in Europe, would you take it?",
        title: "Careers | Sifted",
        image: {
          url: "https://www.datocms-assets.com/60124/1641385078-join-us.png",
        },
      },
      title: "Careers at Sifted",
      subtitle:
        "If European startups are close to your heart, you're in the right place.",
      cta: [
        {
          text: "See our open roles",
          url: "https://apply.workable.com/sifted-1/",
        },
      ],
      images: [
        {
          url: "https://www.datocms-assets.com/60124/1665761842-025a2773.jpg",
          alt: "Team",
          width: 4359,
          height: 2924,
          focalPoint: {x: 0.5, y: 0.5},
          customData: {},
          blurUpThumb:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBg4ICAgSEwoLFBAQDRMVDRYNDQ4NJhUlGBYVFiEaMysjJh0oHR4WJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig1Oy87Ozs7Ozs7Oy87LzUvOy8vOzwvLzw7LzsvLy8yLy87Ly8vOy8vLy8vLy8vLy81L//AABEIABEAGAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAAAgEDBAX/xAAbEAACAwADAAAAAAAAAAAAAAAAAQIDBAURMf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBf/EABwRAAICAwEBAAAAAAAAAAAAAAABAjEDBRESBP/aAAwDAQACEQMRAD8Ar13KuPbKsm2Fj6TF5Kp2V9IwcXx9tVjlKQU15Nf6dpljkShHqO3c1JAZ9DcIkhXSMtnl7Q+nwMoAFUQdi7fCAASJSs//2Q==",
        },
        {
          url:
            "https://www.datocms-assets.com/60124/1645629982-reportsthumbnail2.jpg",
          alt: "Sifted's reports",
          width: 2400,
          height: 1200,
          focalPoint: {x: 0.5, y: 0.5},
          customData: {},
          blurUpThumb:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoWDhUSFRINDRQVDQ4YFx0ZGBYVIhUmHy0lGh0oHRUWJDUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ly87OzsvLy8vOy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAAwAGAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAFAAEG/8QAHRAAAQQCAwAAAAAAAAAAAAAAAQACAxEEIQUSIv/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAP/EABsRAAEEAwAAAAAAAAAAAAAAAAEAAgMhERIx/9oADAMBAAIRAxEAPwDTcpkiOIkILG5HvNRFJLL9sp20LJG2OS2iloXbC1R8QBpNnMDWqIyIlw2rSpAtxxf/2Q==",
        },
        {
          url: "https://www.datocms-assets.com/60124/1665761932-4hv4sm-2.jpg",
          alt: "Summit",
          width: 1164,
          height: 966,
          focalPoint: {x: 0.5, y: 0.5},
          customData: {},
          blurUpThumb:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoNEAgLFRAVFQ4NDhANDh0VDQ0NIxYZGhYVIiEaNSsmGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHRAQHDsoIiI7OzUvOzs2LzsyLy81LzUvNS8vLzAvLzUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABQAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABAUBAv/EAB0QAAICAgMBAAAAAAAAAAAAAAAEAQMCMRESIkL/xAAXAQEBAQEAAAAAAAAAAAAAAAACBAMB/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECAxExQSH/2gAMAwEAAhEDEQA/AIyVXEjbFPNYmu1jjOxmxzCcNljtY4RwiKytPeTTppvCJ3AGbsYXDLJuN9kfRtjNvWfQANFfSM4zblz7kAAM9nLPJH//2Q==",
        },
        {
          url:
            "https://www.datocms-assets.com/60124/1665762005-image-from-ios.jpg",
          alt: "baking",
          width: 4032,
          height: 3024,
          focalPoint: {x: 0.5, y: 0.5},
          customData: {},
          blurUpThumb:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBg8NDg0PDQgODg8JDgcNDRENFgkOFx8ZGBYVIhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHC8cIhwvNS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABIAGAMBIgACEQEDEQH/xAAZAAADAAMAAAAAAAAAAAAAAAAAAQQCBQb/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIDBDET/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EABkRAAIDAQAAAAAAAAAAAAAAAAACARExEv/aAAwDAQACEQMRAD8A6C3ZFol9k5DtyTijCuhtkrDFyWVXpICeUHBCD0LLG01cJK+gAjaWXBaOAABM7af/2Q==",
        },
        {
          url: "https://www.datocms-assets.com/60124/1665762440-img_1677.jpg",
          alt: "working",
          width: 4032,
          height: 3024,
          focalPoint: {x: 0.5, y: 0.5},
          customData: {},
          blurUpThumb:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIEQgRFhULDhcQDRkVGB0PDQoNFxwlGB4TFiEaHysjJh0oJiEWJDUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIiQ7OzsvNTs7OzsvLzUvLzUvLzUvLzsvNTUvLy8vLy8vLy8vLy81Ly8vLy8vLy8vLy8vL//AABEIABIAGAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAABgEFBwT/xAAjEAABAwIFBQAAAAAAAAAAAAAAAQIEAxEFBjFBcRITFTM0/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMA/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECMhEhMQP/2gAMAwEAAhEDEQA/ANEdiDE3IWcxU1EPzavW3UWFCa97L3A2hQ2sltPxGmzckQ804s+LQc++gAbSLRhlHFGVe4gzQ/SAElYn40FLO/xVOAABy6Zn/9k=",
        },
      ],
      pageContent: [
        {
          id: "89857836",
          __typename: "SideBySideContainerRecord",
          title: "What we do",
          body:
            "Sifted is the home for Europe’s startup community. Our reporting covers the topics and trends that matter most to founders, operators and investors through articles, newsletters and events.\n\n\nIn 2021, we launched membership and over 2022 we’ll be working hard to make it the best it can be, including developing data and community-based products to complement our journalism. Join us to be part of this exciting journey.",
          reverseLayout: false,
          removeHr: false,
          media: [
            {
              id: "89894212",
              image: {
                alt: null,
                url:
                  "https://www.datocms-assets.com/60124/1665761786-img_8294.jpeg",
                blurUpThumb:
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFQoLDhcbFQ0ZGh0YHREkGx8dHhYiFiEmKysqGh0oHSEWJDUlKDkvMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs0Ozs7Ly8vLzs7Oy8vLy8vLy8vNS8vLy81Ly8vLy81Ly8vLy8vLy8vLy8vLy8vL//AABEIABYAGAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAABAUCBgH/xAAhEAACAQMDBQAAAAAAAAAAAAAAAQIDBAUSITERIjJBUf/EABcBAQADAAAAAAAAAAAAAAAAAAMAAgX/xAAbEQEAAwEBAQEAAAAAAAAAAAABAAIDIQQSEf/aAAwDAQACEQMRAD8AzS3Y0odpIpXii92ORyENPkjV09yMmeIExdLowFrm6U+GAlfZZIVvPVZyt3kqlGDcfRLWevNfMenwAH2xz+jkLC9keyzY5CdzBOS5PQAs50OBAdL/AK9n/9k=",
                focalPoint: {x: 0.5, y: 0.5},
              },
            },
          ],
          cta: [],
        },
        {
          id: "90641059",
          __typename: "WhatMattersContainerRecord",
          title: "What matters to us",
          body:
            "We are a team who likes to roll up our sleeves, ask the hard questions and work hard — together — to find the answers to them.",
          emojiText:
            "We’re `curious` and we love to `learn`\n\nWe like to be `brilliant` at what we do but we’re `honest` about what we don’t know\n\nWe give people lots of `responsibility` and `trust` them to do great work\n\nWe enjoy working `together` and solve problems as a team \n\nWe treat people with respect and deeply believe in `diverse and inclusive` teams",
        },
        {
          id: "89857837",
          __typename: "SideBySideContainerRecord",
          title: "What we did in 2021",
          body:
            "We had an incredible 2021, the team doubled in size, and our output was incredible – take a look here at what we accomplished last year.",
          reverseLayout: false,
          removeHr: false,
          media: [
            {
              id: "89894214",
              video: {url: "https://vimeo.com/659299245/d701d853c5"},
            },
          ],
          cta: [],
        },
        {
          id: "90640788",
          __typename: "TeamContainerRecord",
          title: "Learn more about life at Sifted",
          video: {url: "https://vimeo.com/662569422/fa33dad91b"},
          cta: [
            {
              text: "See open positions!",
              url: "https://apply.workable.com/sifted-1/",
            },
          ],
        },
        {
          id: "90402645",
          __typename: "PerkContainerRecord",
          title: "Perks and benefits",
          perk: [
            {
              icon: "🎓",
              iconDescription: "Mortarboard",
              text:
                "With my £1000 annual development budget, I chose to have a career coach over several months to get clarity over my development, progress and future as a reporter. We discussed my path into journalism, my strengths, and my blindspots as a reporter and colleague.\n\nI feel I grew hugely in confidence and clarity in my career and thoughtfulness around what excellence looks like. I also designed structures of accountability in my growth.",
              attribution: "Isabel, senior reporter",
              heading: "Learning budget",
            },
            {
              icon: "✨",
              iconDescription: "Stars",
              text:
                "Every day at Sifted is different and there is a real 'test and learn' mindset. Everyone's ideas are welcomed, heard and acted upon. There's no bureaucracy or hoops to jump through – if it's a good idea, you're able to just run with it and see what happens, which was really refreshing.\nThe people are also great!\n\nI love working with so many different teams on a variety of projects and it's a very welcoming environment to come into as a new hire.",
              attribution: "Francesco, head of product",
              heading: "Interesting work",
            },
            {
              icon: "💰",
              iconDescription: "Moneybag",
              text:
                'Getting equity in the business makes me feel more part of the team, that I\'m building something amazing and will be rewarded for my efforts should we achieve our goals.\n\nThe level of responsibility I have here is much more than I would get in a larger B2B outfit, and I want to look back and say "I built that" and have learned so much on the journey!',
              attribution: "Laura, people and talent manager ",
              heading: "Equity",
            },
            {
              icon: "🇪🇺",
              iconDescription: "EU Flag",
              text:
                "In 2021, I worked from Paris, Florence, Istanbul and Helsinki. My trips allowed me to connect with Sifted fans on the ground (and meet new ones!) and better understand the incredible work being done across Europe’s tech ecosystem.\n\nBecause Sifted is a remote-enabled organisation, I was able to collaborate with colleagues and manage business as usual, in addition to getting the benefits of learning about new companies and communities.",
              attribution: "Eleanor, deputy editor",
              heading: "20 days 'Nomad' working",
            },
          ],
        },
        {
          id: "89894216",
          __typename: "SideBySideContainerRecord",
          title: "Our office",
          body: "100 Clifton Street, Shoreditch, London, EC2A 4TP.",
          reverseLayout: true,
          removeHr: true,
          media: [
            {
              id: "89894215",
              image: {
                alt: null,
                url:
                  "https://www.datocms-assets.com/60124/1665761688-download.jpg",
                blurUpThumb:
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFg0LDhUVDRYNDh0PFhUNFxUZGBYTFhUaHysjGh0oHRUWJDUlKC0vMjIyHSU4PTcwPCsxMi8BCgsLAg0OFhAQHC8oIh0vLy8vOy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABAAGAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAFBgECAwD/xAAdEAACAwACAwAAAAAAAAAAAAABAwACEQQFEiEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwH/xAAaEQACAgMAAAAAAAAAAAAAAAAABQIDARNB/9oADAMBAAIRAxEAPwBud2VAPszT26/LNEBsF7jNlFca4tumWNzfuCSrVjgvl1bX0Z0BodZIwmRG3NAM1Lj/2Q==",
                focalPoint: {x: 0.5, y: 0.5},
              },
            },
          ],
          cta: [
            {text: "View maps", url: "https://goo.gl/maps/eTLTzj1UnpPPquzD8"},
          ],
        },
      ],
    },
  };
};

export default fetchFromDatoCms;
