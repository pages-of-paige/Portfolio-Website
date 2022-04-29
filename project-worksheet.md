# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description / Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| Javascript | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 4| Final Touches | Incomplete
|Day 5| Present | Incomplete


## Project Description

[Background image inspiration](https://codepen.io/collinstheuncoder/pen/YpvOpw)

This project will be a portfolio website for myself to present to future employers/clients. I want to accurately portray my artistic and technical sides, how they blend together, and what creations come out of it. I want to use round shapes wherever possible to soften the viewer's gaze and evoke a sense of calm and trust. This site will have an About Me page, a Projects page and a Contact Me page, along with an email-list sign up form and dynamic navigation menu.

## Wireframes

[Main Page Wireframes](https://i.imgur.com/iVcwyjb.jpg)

[About Me Page Wireframes](https://i.imgur.com/L4T2Z3o.jpg)

[Projects Page Wireframes](https://i.imgur.com/oRewEeX.jpg)

[Contact Me Page Wireframes](https://i.imgur.com/OBvdosg.jpg)


## Time/Priority Matrix 

![Time/Priority Matrix](https://imgur.com/By6OwqF.jpg "Time/Priority Matrix")

#### MVP

- About Me/landing page
- Projects page (clickable links to individual project sites)
- Contact Me page (email-list signup form)
- Dynamic menu/navigation bar
- Email list sign-up form

#### PostMVP 

- Trailing menu
- Hover dropdown message for projects
- Bootstrap
- Photo loop background on main page

## Functional Components

Below are the functional components broken down into MVP versus post-MVP.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger Menu | H | 2hr | 2hr |
| Four separate pages | H | 4hr | 5hr |
| Projects - linked pictures | H | 4hr | 3hr |
| Email list form | M | 2hr|  3hr | 
| Grid/Flexbox | M | 4hr | 4hr|
| Working with jQuery | H | 6hrs|  3hr | 
| Responsive design | H | 5hr | 6hr |
| Total | H | 23 hrs| 26hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project hover dropdown message | L | 3hr | 0hr |
| Trailing menu | M | 2hr | 1hr (Scrapped due to time) |
| Color blocking | H | 4hr | 2hr |
| Photo loop background on main page | L | 2hr | 0hr |
| Total | H | 11hrs| 3hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 

## Code Snippet

I was proud of this creative way of linking my "pages" together without having an html link to use. 

```
$('.aboutMe').click(function() {
    $('#contactMePage').css('visibility', 'hidden')
    $('#mainPage').css('visibility', 'hidden')
    $('#projectsPage').css('visibility', 'hidden')
    $('#aboutMePage').css('visibility', 'visible')
})
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

