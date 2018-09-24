import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "start_text_644923";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_iconbutton_149003";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_text_409599";
    item['en'] = "ABOUT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_text2_570696";
    item['en'] = "OUR PROCESS";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_text3_173581";
    item['en'] = "WORKS";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_text4_410720";
    item['en'] = "LET’S TALK";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_text5_668799";
    item['en'] = "CONTACT";
    
    item = {};
    this.items.push(item);
    item['key'] = "letstalk_button_123729";
    item['en'] = "GET A QUOTE";
    
    item = {};
    this.items.push(item);
    item['key'] = "letstalk_button_621786";
    item['en'] = "SCHEDULE FREE CONSULTATION";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_567017";
    item['en'] = "THE ART OF";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_93614";
    item['en'] = "DIGITAL";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textcopy_913277";
    item['en'] = "INTERACTION";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_text_867847";
    item['en'] = "OUR";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_text_398668";
    item['en'] = "8 STEPS";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textcopy_290412";
    item['en'] = "PROCESS OF";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textcopy2_1030203";
    item['en'] = "ITERATION";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_button_826844";
    item['en'] = "Let’s talk";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_1032363";
    item['en'] = "The Art of\nDigital\nInteraction";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock_649885";
    item['en'] = "The Art of\nDigital\nInteraction";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_463446";
    item['en'] = "We believe in power of great idea.";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_484348";
    item['en'] = "Whatever you have in mind,\nwe can buid it.";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_textblock_245174";
    item['en'] = "Contact";
    
    item = {};
    this.items.push(item);
    item['key'] = "works_textblock_101710";
    item['en'] = "Work";
    
    item = {};
    this.items.push(item);
    item['key'] = "letstalk_textblock_235694";
    item['en'] = "Let’s Talk";
    
    item = {};
    this.items.push(item);
    item['key'] = "getaquote_textblock_512830";
    item['en'] = "Get A Quote";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationtime_textblock_795270";
    item['en'] = "Free Consultation Time";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationday_textblock_430646";
    item['en'] = "Free Consultation Day";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationform_textblock_56935";
    item['en'] = "Free Consultation Form";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationday_fab_256146";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationday_fab_408440";
    item['en'] = "Back";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationtime_fab_784408";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationtime_fabcopy_820770";
    item['en'] = "Back";
    
    item = {};
    this.items.push(item);
    item['key'] = "freeconsultationform_fabcopy_380789";
    item['en'] = "Back";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock_15620";
    item['en'] = "The Art of\nDigital\nInteraction";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textblock_274564";
    item['en'] = "The Art of\nDigital\nInteraction";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textblock2_40503";
    item['en'] = "We believe in power of great ideas.";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textblock3_825269";
    item['en'] = "Whatever you have in mind,\nwe can buid it.";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_button_144073";
    item['en'] = "Let’s talk";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp3_button_416112";
    item['en'] = "Let’s talk";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock_918202";
    item['en'] = "About ";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock2_705261";
    item['en'] = "Our\nPurpose";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock3_997861";
    item['en'] = "We are a boutique digital studios based in Copenhagen that works at the intersection of design, technology &  human interaction.\n\nWe help entrepreneurs, startups and enterprises by telling their story & creating amazing digital experiences.\n\nOur mission is driven by curiossity and passion.";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp4_textblock3_784481";
    item['en'] = "We are a boutique digital studios based in Copenhagen that works at the intersection of design, technology &  human interaction.\n\nWe help entrepreneurs, startups and enterprises by telling their story & creating amazing digital experiences.\n\nOur mission is driven by curiossity and passion.";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp5_textblock2_288112";
    item['en'] = "Our\nPurpose";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock2_525473";
    item['en'] = "Our\nServices";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock3_410575";
    item['en'] = "Branding & Identity\nResponsive Web\nNative Mobile App\nProgressive Web App\nMotion Graphics / Animation\nPrototypes\nUX/UI";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock3_569428";
    item['en'] = "Mobile Marketing\nGeo Marketing\nSEO\nSocial Media\nEmail Campaigns\nIoT Development\nSmart City Initiative";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp6_textblock3_993710";
    item['en'] = "Branding & Identity\n\nResponsive Web\n\nNative Mobile App\n\nProgressive Web App\n\nMotion Graphics / Animation\n\nPrototypes\n\nUX/UI";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp6_textblockcopy_370292";
    item['en'] = "Mobile Marketing\n\nGeo Marketing\n\nSEO\n\nSocial Media\n\nEmail Campaigns\n\nIoT Development\n\nSmart City Initiative";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp7_textblock2_176579";
    item['en'] = "Our\nServices";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_textblock_314635";
    item['en'] = "About";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textblock_67581";
    item['en'] = "How we help our clients design & develop better products.";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textblock2_998169";
    item['en'] = "Boomedia is a design and innovation company helping its clients to explore, develop and build the future of their business.\nOur goal is to create a product, which will help your company to stand out, to attract the audience and to increase brand loyalty.\nWe analyze your business and your product to help them look - and work - their best.\nThis will help you convert leads into paying customers and speed the growth of your company.\nLaunching a new website or redeveloping your current one sound simple enough, right?\nBut there’s actually a lot to consider before you dive into the world of Web development, and it runs much deeper than defining a price.\nA website isn’t a product, it’s a service.\nHow we do web development in Boomedia?\nIt’s time to define our approach and for this we have our 8 steps process of iterations - here’s how.";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textblock3_103111";
    item['en'] = "01";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textblock4_1036254";
    item['en'] = "Step of Process";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textblock5_651716";
    item['en'] = "Goal Identification";
    
    item = {};
    this.items.push(item);
    item['key'] = "ourprocess_textblock6_79527";
    item['en'] = "The most important task at this point is to get the clear understanding of your future website/app purpose, the main goals you wish to get, and the target audience you want to attract to your site/app. Such kind of a website/app development questionnaire helps to develop the best strategy for further project management.\nNews portal differs from the entertainment websites, and online resources for teenagers looks different than sites for adults. Different types of websites provide visitors with different functionality which means that different technologies should be used according to the purposes.\nQuestions to explore and answer in this stage of the process include:\n- Who is the site for?\n- What do they expect to find or do there?\n- Is this wensite’s primary aim to inform, to sell, or to amuse?\n- Does the website need to clearly convey a brand’s core message, or is it part of a wider branding strategy with its own unique focus?\n- What competitor sites, if any, exist, and how should this site be inspired by/different than, those competitors?";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp8_textblock3_733720";
    item['en'] = "01";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp8_textblock4_779326";
    item['en'] = "Step of Process";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp8_textblock5_439116";
    item['en'] = "Goal Identification";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp8_textblock6_954921";
    item['en'] = "The most important task at this point is to get the clear understanding of your future website/app purpose, the main goals you wish to get, and the target audience you want to attract to your site/app. Such kind of a website/app development questionnaire helps to develop the best strategy for further project management.\nNews portal differs from the entertainment websites, and online resources for teenagers looks different than sites for adults. Different types of websites provide visitors with different functionality which means that different technologies should be used according to the purposes.\nQuestions to explore and answer in this stage of the process include:\n- Who is the site for?\n- What do they expect to find or do there?\n- Is this wensite’s primary aim to inform, to sell, or to amuse?\n- Does the website need to clearly convey a brand’s core message, or is it part of a wider branding strategy with its own unique focus?\n- What competitor sites, if any, exist, and how should this site be inspired by/different than, those competitors?";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp10_textblock6_985842";
    item['en'] = "The most important task at this point is to get the clear understanding of your future website/app purpose, the main goals you wish to get, and the target audience you want to attract to your site/app. Such kind of a website/app development questionnaire helps to develop the best strategy for further project management.\nNews portal differs from the entertainment websites, and online resources for teenagers looks different than sites for adults. Different types of websites provide visitors with different functionality which means that different technologies should be used according to the purposes.\nQuestions to explore and answer in this stage of the process include:\n- Who is the site for?\n- What do they expect to find or do there?\n- Is this wensite’s primary aim to inform, to sell, or to amuse?\n- Does the website need to clearly convey a brand’s core message, or is it part of a wider branding strategy with its own unique focus?\n- What competitor sites, if any, exist, and how should this site be inspired by/different than, those competitors?";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp10_textblock5_50037";
    item['en'] = "Goal Identification";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp10_textblock4_299121";
    item['en'] = "- Step of Process";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp10_textblock3_289218";
    item['en'] = "01";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp10_textblock_1026243";
    item['en'] = "The most important task at this point is to get the clear understanding of your future website/app purpose, the main goals you wish to get, and the target audience you want to attract to your site/app. Such kind of a website/app development questionnaire helps to develop the best strategy for further project management.\nNews portal differs from the entertainment websites, and online resources for teenagers looks different than sites for adults. Different types of websites provide visitors with different functionality which means that different technologies should be used according to the purposes.\nQuestions to explore and answer in this stage of the process include:\n- Who is the site for?\n- What do they expect to find or do there?\n- Is this wensite’s primary aim to inform, to sell, or to amuse?\n- Does the website need to clearly convey a brand’s core message, or is it part of a wider branding strategy with its own unique focus?\n- What competitor sites, if any, exist, and how should this site be inspired by/different than, those competitors?";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
