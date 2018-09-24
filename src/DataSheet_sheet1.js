import DataSheetBase from './DataSheetBase.js';
import datasheet_sheet1_row0_image from './images/datasheet_sheet1_row0_image.png';
import datasheet_sheet1_row1_image from './images/datasheet_sheet1_row1_image.png';
import datasheet_sheet1_row2_image from './images/datasheet_sheet1_row2_image.png';
import datasheet_sheet1_row3_image from './images/datasheet_sheet1_row3_image.png';
import datasheet_sheet1_row4_image from './images/datasheet_sheet1_row4_image.png';
import datasheet_sheet1_row5_image from './images/datasheet_sheet1_row5_image.png';
import datasheet_sheet1_row6_image from './images/datasheet_sheet1_row6_image.png';
import datasheet_sheet1_row7_image from './images/datasheet_sheet1_row7_image.png';

export default class DataSheet_sheet1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['number'] = "01";
    item['title'] = "Goal Identification";
    item['image'] = datasheet_sheet1_row0_image;
    item['text'] = "The most important task at this point is to get the clear understanding of your future website/app purpose, the main goals you wish to get, and the target audience you want to attract to your site/app. Such kind of a website/app development questionnaire helps to develop the best strategy for further project management.\nNews portal differs from the entertainment websites, and online resources for teenagers looks different than sites for adults. Different types of websites provide visitors with different functionality which means that different technologies should be used according to the purposes.\nQuestions to explore and answer in this stage of the process include:\n- Who is the site for?\n- What do they expect to find or do there?\n- Is this wensite’s primary aim to inform, to sell, or to amuse?\n- Does the website need to clearly convey a brand’s core message, or is it part of a wider branding strategy with its own unique focus?\n- What competitor sites, if any, exist, and how should this site be inspired by/different than, those competitors?";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['number'] = "02";
    item['title'] = "Scope Definition";
    item['image'] = datasheet_sheet1_row1_image;
    item['text'] = "Once we know the site’s goals we can define the scope of the project, and the timeline for building those out.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['number'] = "03";
    item['title'] = "Site Map & Wireframing";
    item['image'] = datasheet_sheet1_row2_image;
    item['text'] = "With the scope well-defined, we can start digging into sitemap, defining how the content and features we defined in scope definition will interrelate.\nThe sitemap should describe the relations between the main areas of your website/app. \nSuch representation could help understand how usable the final product will be. It can show you the “relationship” between the different pages/screens of a website/app, \nso you can judge how easily it will be for the end-user to find the required information or service if he start from the main page. \nA wireframe is a visual representation of user interface that we’re going to create. But it doesn’t contain any design elements such as colors, logos, etc. It only describes the elements that will be added to the page/screen and their location.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['number'] = "04";
    item['title'] = "Content Creation &\nVisual Elements";
    item['image'] = datasheet_sheet1_row3_image;
    item['text'] = "Now that we have a bigger picture of the site in mind, we can start creating content for the individual pages, always keeping search engine optimization in mind to help keep pages focused on a single topic. It’s vital that you have real content to work with for our next stage.\nWith the site architecture and some content in place, we can start working on the visual brand. Depending on the client, this way already be well-defined, but you might also be defining the visual style from the ground up. Tools like style tiles, moodboards, and element collage can help with this process.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['number'] = "05";
    item['title'] = "Coding";
    item['image'] = datasheet_sheet1_row4_image;
    item['text'] = "At this step, we can finally start creating the website/app itself.\nAll static web page elements that were designed during previous stage and layaut creation should be created and tested. Then, special features and interactivity should be added.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['number'] = "06";
    item['title'] = "Testing";
    item['image'] = datasheet_sheet1_row5_image;
    item['text'] = "By now, you’ve got all your pages and defined how they display to the site visitor, so it’s time to make sure it all works. Combine manual browsing of the site on a variety of devices with automated site crawlers to identify everything from user experience issues to simple broken links.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['number'] = "07";
    item['title'] = "Launch";
    item['image'] = datasheet_sheet1_row6_image;
    item['text'] = "Once everything’s working beautifully, it’s time to plan and execute your site launch. This should include planning both launch timing and communication strategies.";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['number'] = "08";
    item['title'] = "Maintenance &\nEvolve";
    item['image'] = datasheet_sheet1_row7_image;
    item['text'] = "What’s important to remember is that a website/app is more a service than a product. It’s not enough to “deliver” a website/app to a user. The important thing is keeping your website/app up to date and  develop new features.";
    item.key = key++;
  }

}
