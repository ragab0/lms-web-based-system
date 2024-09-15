import React from "react";

export default function LogoIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={31}
      height={40}
      fill="none"
      {...props}
    >
      <path fill="url(#a)" d="M0 0h31v40H0z" />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="matrix(.01613 0 0 .0125 -.29 0)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAE20lEQVR4Ae2cz0/UQBTHB38ElCVZw5pogspF5WAiRo2EKJQfAdztwsQLRzV4M0YOxoMmwg0PJqKe/JGUrRoPxtabJwOJfwD+B+vN4x78A555LcN2l+2ytN32vWWbNNNtpu3Mp9/35s3rgBBJbQYMChMWhQmGMKEoTCgJE2BrL4kCbAoTbKcO1m1vQggD0qIAS8KEdQ8sBa1+WYCiMODO/uXoqs2rsvrAymqsrLfvQBrQH0hxfgDVeTRxvHdLb66fC686Ba26dNXYov7RAFk1MFSaYjWM4L9xwLndWkJstvJ2wi6Jlhmp0S+hae3sZLMU6N7XNecW8IkFWIsdXvllrfM2ZYzTyp1pruL8noO+l+2WhOlWg8Q2sNwoqE/BZDlj+RhgeqY6HH3JzBe6s41kfJ4ffJx3s9komW8ZKKPEQ7Khi5/yDTYCFLT8nwv0I2zyAViZDPVTRNznGYUzZb8TN6T6z2MjwTbAkK+qDbAlAZZC9irGy2kqsD2IhMrsFGAjRgmFfBRFBRbge8hexXg5TYDLMRII+SiKAA3QQvYqxstpAmSUjaEGkNUAgkKnBtDktoaGGkB2Sz5oAWSUB1TjFCWA7NRHyQcawCj2U+ojAvDA6l/oSmtMl3YkbMIIL3VuHnoyo9DTO2rwA5kgwAp4CNCFWOzp1Rgt8UgI4MGlTUidyrnQFDxPmcqMLHk9Dd3jmAF2vP0HXTdXfME5KtwCyQNiTABRcZ233tRVnReeOqYPMSKAqKyOV3+390OPf8Hhe1+hM7uyZ2gKniq7MzcWW8aEEdThBz8cMEcvLoSGoyD5lccHxmDw/gykMhrRFFeDCkQTPDL0sCHf5Qdjr+cR3uSHWdBtCWe0iWI6rRFMc+0CMAlwCPrYaW0bHgKcfD8LmbPaS3qmXAcgOv29qiaK+ghPe513lIfw1I6mTC/QrgEQ/Vz3xYVE4HnNVoHzlicujxPL2FQBrDk78AS4USjM7x4nL41XmK0XnDq+/jwHtHyhB2CSyhuYn9o2VQXLr+wbHieUufEATMLn9Q1PAKrKD1at89ee5gito94CiLGdn2k143wQcArmzOc56EoPEUl/mQBev4cdQ3PCEe/Ko5sw9CzrKARL/I3nL9yddur0T04C1s+cH9sVPo6sWBevVbGdAhKkvPokS2QdtQnOHBWh4ZsN0hnvNQgHQxA0S9zxOApg3mfg8cgLfZVETIjqQ1VVN5D67yljlsb6mb4vP9nBw5c782mOxhK44XcLLAFOf5qjsQgzCr+XlLmT8IFJdT6K57YBehIFQYCSAJiz5J8gjSdwDQ0fqNtykwCMIAMZjT8Hy1tyjSPAnCVpxIF5Wy6yBPhN0vjQpNtS4whQ/yrpfGTK27LECWLeljRmISoM0C25ygwgrbQ+NzPO2pLePy3TbbnOQoWWpPlnYGxUSGnwUD5QldRVmLclLd+nwKlS2rKf6oiM7cL2qbaSLakG1jmbSODcyJsjF9Z8k4S+AzdCUAiRIzJHxnY02GR61ZKGyBqeep26LZeTiA+zlqTx2VKBCFPiwBLX6IzPYTVgNArWCXGa7RctucEiVGkUWq16zozFkhuRmrV7PzrpqVodj/ocgsRsNqaWgsB0XIKbBdpf4Gq9CAcm+klLftct+bvaXzofrvC8Cxwz4CSg/QeOJl0SR512CAAAAABJRU5ErkJggg=="
          id="b"
          width={80}
          height={80}
        />
      </defs>
    </svg>
  );
}