<img src="assets/images/multiple-devices2.jpeg" style="margin: 0;">

[website link](https://veraleitaodev.github.io/EQ_test/)

---

## Table of Contents

- [1.Project Summary](#1.Project-Summary)
- [2.UX](#2.UX)
  - [2.1.Strategy](#2.1.Strategy)
  - [2.2.Scope](#2.2.Scope)
    - [2.2.1.Current Features](#2.2.1.Current-Features)
    - [2.2.2.Future Features](#2.2.2.Future-Features)
  - [2.3.Structure](#2.4.Structure)
- [3.Technologies and Libraries](#3.Technologies-and-Libraries)
- [4.Resources and Tools](#4.Resources-and-Tools)
- [5.Tests](#5.Tests)
  - [5.1.Validation](#5.1.Validation)
  - [5.2.Manual Testing](#5.2.Manual-Testing)
- [6.Deployment](#6.Deployment)
- [7.Credits](#7.Credits)

---

## 1.Project Background
This project is thought with the user in mind. A user that is looking to improve one's life. Current education system favours IQ and promotes the idea that having a successful academic life will lead to a successful career.
Although partially true, it is not the whole reality. Success in a career and in life is achieved through learning, implementing and relating with the social environment while growing as a person. 
EQ brings light to the need to be aware and manage owns emotions and interact with others. Many time associated with softskills, a buzzword in the jobs and recruitment setting.

---

## 2.UX

### 2.1.Strategy
The user wants to know how to improve one's life. Becomes curious on how to develop EQ though taking the eq quiz.
The user is a single person, not a business, hence clear message with appealing images are important. 

This test is based on Daniel Goleman work about brain and behavioral sciences. The test had been replicated from Paulo Vieira books as he uses it to access the EQ before and after the subject of his books and course materials.

#### color theme

After chosing the images for the home page, I used Adobe Color to extract colour scheme matching the image on the first callout container.

- colours used:

<img src="assets/images/colorScheme.jpeg">

### 2.2.Scope
- the important points to in this project included a quiz - a good way to create engagement with the user. 
This site offers a brief introduction to what it is EQ and offers a quiz to create awareness on current EQ. reduced text in smaller devices is necessary, not to croud the page.
Clear appealing images included. on the homepage will include:
 - dropdown language menu for Portuguese / English options
 - Clear concise information about EQ
 - Button leading to modal
    - modal with quiz with likert radio buttons (initially was a dropdown with 1-10 as answer)
    - modal quiz concluded in results presenting description and a chart, also a link to return to homepage
 - Subscription to Newsletter card to allow to submit email address to subscribe
 - Footer with further reading links and social media links

#### 2.2.1.Current Features

- Home page - to welcome user and provide a button to redirect to quiz
- Responsive navigation - the site allows quality and uniform display in a vast range of screen sizes
- On the top right corner it can be found a dropdown menu with the option of English and Portuguese language
- Background image positioned to highlight headings and test button.
- Appealing button with 3d animation when hovered, with question "What is my QE?", that will take the user to a modal quiz about EQ.
- text to add interest and clarity regarding EQ.
- Sketch reinforcing the idea that it is needed both IQ and EQ to reach success.
- Subscribing card, although no back end, it provides the place for the user to submit email address in order to receive newsletter;
- Footer with links for further reading
- Social media icons with links directing to social media discussion the EQ topic

#### 2.2.2.Future Features

- Add backend to Subscribing section
- Add media to modal during questionaire to make it more interesting
- Add on results section, areas that require improvement based on answers
- Add useful links on results

### 2.3.Structure

The website is presented in a minimalist simple scrolldown page with background image of a person confused (considering taking the test?).
On the to right corner there is a minimal dropdown button with option of English and Portuguese language.
Image serves as background to a callout text and test button that that want to compell the user to become inquisitive regards own EQ level and engage in the quiz.
In the middle of the page there is additional information regards EQ and a section to subscribe to Newsletter that does not have back end code at the moment (future feature)
At the bottom of the page there are links for further information on the subject and links to social media.

---

## 3.Technologies and Libraries

- HTML5
  HTML5 is a markup language used for structuring and presenting content on the World Wide Web.

- CSS3
  Cascading Style Sheets (CSS) is a style sheet language used for presentation of a markup language like HTML. (version 3)

- [Font Awesome](https://fontawesome.com/)
  CSS font and icon library kit. version 5 used

- [Highcharts](https://www.highcharts.com/)
  Highcharts, a javascript based software library for charts

- [Bootstrap 4](https://getbootstrap.com/)
  Free and open-source CSS framework for mobile first front-end web development

- [Google Fonts](https://fonts.google.com/)
  Font catalogue with more than 135 languages and more than 1000 font families accessible to use on CSS via API

- [JQuery](https://jquery.com/)
  Is a javascript library written in a simplified way "write less do more" style. version 3.5.1 used

- [Github](https://github.com/)
  A host for software development and version control using Git.

- [Gitpod](https://www.gitpod.io/)
  Gitpod is a cloud-based IDE (integrated development environment) that allowed me to write, run, and debug the code used for this project.

- [Git](https://git-scm.com/)
  Git was used for version control using the Gitpod to commit to Git and push to GitHub.

---

## 4.Resources and Tools

- [Unsplash](https://unsplash.com/)
  Used photos obtained on [Unsplash](https://unsplash.com/) for this project, background photo on home page and profile image of a brain
- [Dreamstime](https://dreamstime.com/)
  Obtained sketch image iq + eq from dreasmstime
- [ami.responsivedesign.is](http://ami.responsivedesign.is/)
  used for mockup on top of readme page chowing website in different devices

---

## 5.Tests

### 5.1.Validation
- [W3C Markup Validator](https://validator.w3.org/)
    * <img src="assets/images/w3s-indexhtml.jpeg">
    * <img src="assets/images/w3s-indexPthtml.jpeg">
    there are 2 warnings regards empty elements, however these would be populated at later date through javascript functions
    
- [W3C CSS Validator](https://validator.w3.org/)
    * <img src="assets/images/w3s-css.jpeg">

### 5.2.Manual Testing

- All javascript had been tested manually and simultanealy through preview via port 8000 (when using IDE gitpod): an issue found was that port would not show updates which led me to research and find that I needed to do hard reset or clear cache, which resolved the issue;
- Used inspect development tool from google chrome and firefox web engines as both allow to inspect different size devices and the website was also tested in real devices (samsung note and samsung s9, ipad and laptop);
- used a simple function whenever created a js file to test if file was linked with html file
- Jquery and javascript tested with console.log commands throughout the project
- known bug:
  • start, next and result buttons inside modal did not respond to .hide, when inspected realised that bootstrap class 'btn' was overriding class 'hide'. To resolve this issue added '!important' to display property of 'hide' class.
  • first used grid for modal buttons layout but it was not responsive so changes to rows and columns classes to take advantage of bootstrap responsive layout.
- first drafts of the project included dropdown option but it was complicated a 1-10 answer as per original Paulo Vieira test and after been peer reviewed on slack it was suggested that radio buttons would be used instead. After analysing the different options I have decided to use radio buttons with likert scale (strongly disagree, disagree, neutral, agree, strongly Agree) as it would have a more intuitive response.

### 5. [Deployment](#deployment)

The project was written in the Gitpod environment and regularly committed to GitHub.

To deploy my site I chose to used GitHub Pages For the Repository. To do this I took the following steps:

1. I selected settings and scrolled down to the GitHub Pages section.
2. Under the drop-down that labelled None and changed to gh-Pages branch which later reverted to master branch.
3. After refreshing the page, I could find a link to the website (https://veraleitaodev.github.io/EQ_test/).

To clone the project and edit it locally on a computer do the following steps:

1. In the GitHub Repository you must click “Clone or Download”.
2. Copy the URL which pops up underneath.
3. Open you IDE of choice.
4. Open Git Bash.
5. Type `git clone and paste the URL` and hit Enter.
   Clone link (https://github.com/veraleitaodev/EQ_test.git)

---

### 6. [Credits](#credits)

- https://www.w3schools.com/howto_css_modals.asp to help put together the quiz in modal
- https://www.youtube.com/watch?v=gLWIYk0Sd38 - used for modal as additional help
- overflow and padding code help takenfrom https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/ to fix scroll bug when modal is open;
- about placeholder on select option form taken and adapted from https://www.tutorialrepublic.com/faq/how-to-make-a-placeholder-for-a-select-box-in-html.php#:~:text=Answer%3A%20Use%20the%20disabled%20and,element%20that%20has%20empty%20value.
- first paragraph taken from website https://www.mindtools.com/pages/article/newLDR_45.htm in response to "What is Emotional Intelligence"
- result text obtained from https://www.mindtools.com/pages/article/ei-quiz.htm and "manual do realizador" manual from Paulo Vieira as well as questions used;
- [ami.responsivdesign.is](http://ami.responsivedesign.is) - multiple devices image in README.md file
- https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript - provided code to validate an email address
- credit to Valentin Salja for the [background photo](https://unsplash.com/photos/0aX51h4WvAk) used
- credit to Alina Grubnyak for the [profile photo of a brain](https://unsplash.com/photos/tEVGmMaPFXk)
- the code for subscrition section was creation of Hugo Carneiro (https://codepen.io/hugguh/pen/LZRRRX) and modified for this project
- button animation for test button was created by Juan Salazar at (https://codepen.io/juanedsa/pen/EyZQqb?editors=1100) and modified to be used on the project's main button
- radio buttons were designed and a criation found at (https://codepen.io/veraleitaodev/pen/gOrerwY )used for medium and wider sizes but for small devices the buttons appear in a vertical alignment to improve display.
- pie chart obtained at [Highcharts](https://www.highcharts.com/)

### Acknowledgements

I have received inspiration for this project after reading about emotional inteligence and observed the work of motivational speakers.
Furthermore, I have received very precious help from my tutor Rhey Ann Magcalas and received great feedback from Malia Havlicek through slack, #peer review group. I would like to aknowledge the crucial knowledge shared by tutors and colleagues in slack environment. 
I had found this project incredibly hard as it was hard to grasp concepts around Javascript and Slack platform was a key source of knowledge and important tips.
