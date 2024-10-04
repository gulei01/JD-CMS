import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SectionsVenturesFinalSection extends Schema.Component {
  collectionName: 'components_sections_ventures_final_sections';
  info: {
    displayName: 'Ventures: Final section';
  };
  attributes: {
    title: Attribute.Text &
      Attribute.DefaultTo<'Join Jasmina to transform lives'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Join Jasmina in transforming lives through Longevity Intelligence and create a healthier, more vibrant future for all!'>;
  };
}

export interface SectionsSectionVenturesPlaybook extends Schema.Component {
  collectionName: 'components_sections_section_ventures_playbooks';
  info: {
    displayName: 'Section: ventures playbook';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<"Jasmina's playbook  for change">;
    subtitle: Attribute.Text &
      Attribute.DefaultTo<'Guided by her concept of "prosperity pathways," Jasmina employs a three-pronged approach to drive transformative change:'>;
    blocks: Attribute.Component<'atoms.title-ck-editor', true>;
  };
}

export interface SectionsSectionVenturesIntro extends Schema.Component {
  collectionName: 'components_sections_section_ventures_intros';
  info: {
    displayName: 'Section: ventures intro';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'J. Ventures'>;
    subtitle: Attribute.Text &
      Attribute.DefaultTo<'Elevating human potential through technology and education'>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface SectionsSectionVenturesHandSection extends Schema.Component {
  collectionName: 'components_sections_section_ventures_hand_sections';
  info: {
    displayName: 'Section: Ventures Hand section';
    description: '';
  };
  attributes: {
    title: Attribute.Text &
      Attribute.DefaultTo<'This is Jasmina\u2019s invitation to you \u2014 to not just imagine, but to actively shape the future we want to live in.'>;
    subtitle: Attribute.Text &
      Attribute.DefaultTo<"Longevity Intelligence[tm] is at the heart of Jasmina's work">;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface SectionsSectionReserveBook extends Schema.Component {
  collectionName: 'components_sections_section_reserve_books';
  info: {
    displayName: 'Section: reserve book';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Join the Longevity Revolution'>;
    subtitle: Attribute.String & Attribute.DefaultTo<'Coming in 2025'>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface SectionsSectionReportFooter extends Schema.Component {
  collectionName: 'components_sections_section_report_footers';
  info: {
    displayName: 'Section: Report footer';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Ready to be part of something extraordinary?'>;
    largeDescription: Attribute.Text &
      Attribute.DefaultTo<"The Longevity Intelligence revolution is here, and it's transforming how we approach health, wellness, and human potential. Our growing global network is at the forefront of this exciting shift, driving innovation and sparking crucial conversations about our collective future.">;
    subtitle: Attribute.String &
      Attribute.DefaultTo<"Here's how you can engage:">;
    descriptionSocials: Attribute.Text &
      Attribute.DefaultTo<'Dive into thought-provoking discussions on our social platforms.'>;
    ctaReport: Attribute.Component<'molecules.text-page-relation'>;
    ctaContact: Attribute.Component<'molecules.text-page-relation'>;
  };
}

export interface SectionsSectionMarqueeLine extends Schema.Component {
  collectionName: 'components_sections_section_marquee_lines';
  info: {
    displayName: 'Section: Marquee line';
  };
  attributes: {
    text: Attribute.String &
      Attribute.DefaultTo<'A conversation with Jasmina: an intimate chat on science, sports, investing,  and the art of transformation.'>;
  };
}

export interface SectionsSectionLongevityKey extends Schema.Component {
  collectionName: 'components_sections_section_longevity_keys';
  info: {
    displayName: 'Section: Longevity Key';
  };
  attributes: {
    title: Attribute.Text;
    textBlocks: Attribute.Component<'atoms.title-ck-editor', true>;
  };
}

export interface SectionsSectionLongevityIntro extends Schema.Component {
  collectionName: 'components_sections_section_longevity_intros';
  info: {
    displayName: 'Section: Longevity intro';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Longevity Intelligence'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Join us in shaping this exciting future. Build your Longevity Intelligence today and be part of the coming renaissance in human capability.'>;
  };
}

export interface SectionsSectionLongevityFinal extends Schema.Component {
  collectionName: 'components_sections_section_longevity_finals';
  info: {
    displayName: 'Section: Longevity final';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Your Ticket to the Future'>;
    subtitle: Attribute.Text &
      Attribute.DefaultTo<'We\u2019re offering a\u00A0limited number of VIP tickets\u00A0to the\u00A0Longevity Intelligence\u00A0launch party!'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Mingle with the author, connect with like-minded visionaries, and be among the first to explore the transformative world of Longevity Intelligence. '>;
    additionalDescription: Attribute.Text &
      Attribute.DefaultTo<'Get your tickets now\u2014the future is waiting, and so is your seat at the table!'>;
  };
}

export interface SectionsSectionLibraryQuotes extends Schema.Component {
  collectionName: 'components_sections_section_library_quotes';
  info: {
    displayName: 'Section: Library Quotes';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    blocks: Attribute.Component<'molecules.quote', true>;
    titleStickyPanel: Attribute.String;
  };
}

export interface SectionsSectionLibraryPeople extends Schema.Component {
  collectionName: 'components_sections_section_library_people';
  info: {
    displayName: 'Section: Library People';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    blocks: Attribute.Component<'atoms.people', true>;
    titleStickyPanel: Attribute.String;
  };
}

export interface SectionsSectionLibraryNewsMedia extends Schema.Component {
  collectionName: 'components_sections_section_library_news_medias';
  info: {
    displayName: 'Section: Library News/Media';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    blocks: Attribute.Component<'molecules.video-news-post', true>;
    titleStickyPanel: Attribute.String;
  };
}

export interface SectionsSectionLibraryBookTv extends Schema.Component {
  collectionName: 'components_sections_section_library_book_tvs';
  info: {
    displayName: 'Section: Library Book/TV';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    blocks: Attribute.Component<'atoms.book-tv', true>;
    titleStickyPanel: Attribute.String;
  };
}

export interface SectionsSectionKeySkills extends Schema.Component {
  collectionName: 'components_sections_section_key_skills';
  info: {
    displayName: 'Section: Key Skills';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Key Skills'>;
    label: Attribute.String &
      Attribute.DefaultTo<'Across these domains include:'>;
    subtitle: Attribute.String & Attribute.DefaultTo<'Why it matters?'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'In this era of exponential change, Longevity Intelligence is your guide to not just surviving, but flourishing. It\u2019s about optimizing your potential in a future where the boundaries of human capability are constantly expanding.'>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface SectionsSectionHomeVisionary extends Schema.Component {
  collectionName: 'components_sections_section_home_visionaries';
  info: {
    displayName: 'Section: Home Visionary';
    description: '';
  };
  attributes: {
    description: Attribute.Text &
      Attribute.DefaultTo<'This is Jasmina\u2019s invitation to you \u2014 to not just imagine, but to actively shape the future we want to live in. Here\u2019s how you\u2019ll do it together:'>;
    contentBlocks: Attribute.Component<'atoms.image-ck-editor', true>;
    hoverBlocks: Attribute.Component<'atoms.title-text', true>;
  };
}

export interface SectionsSectionHomeLongevityIntelligence
  extends Schema.Component {
  collectionName: 'components_sections_section_home_longevity_intelligences';
  info: {
    displayName: 'Section: Home Longevity Intelligence';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Explore the Future with Jasmina '>;
    subtitle: Attribute.Text &
      Attribute.DefaultTo<'This is Jasmina\u2019s invitation to you \u2014 to not just imagine, but to actively shape the future  we want to live in.'>;
    floatingBlocks: Attribute.Component<
      'atoms.image-title-content-button',
      true
    >;
  };
}

export interface SectionsSectionHomeIntro extends Schema.Component {
  collectionName: 'components_sections_section_home_intros';
  info: {
    displayName: 'Section: Home Intro';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Attribute.DefaultTo<'Jasmina Denner'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Join her at the edge where health meets technology, and human potential is redefined.'>;
    subtitle: Attribute.Text &
      Attribute.DefaultTo<'Jasmina isn\u2019t just observing the future \u2014 she\u2019s shaping it. With a life that\u2019s anything but conventional, she\u2019s merging science, technology, and ambition to unlock what\u2019s possible.'>;
    contentBlocks: Attribute.Component<'atoms.title-ck-editor', true>;
  };
}

export interface SectionsSectionEntrySectionContent extends Schema.Component {
  collectionName: 'components_sections_section_entry_section_contents';
  info: {
    displayName: 'Section: Entry section content';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    label: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    buttons: Attribute.Component<'atoms.read-more', true>;
  };
}

export interface SectionsSectionContacts extends Schema.Component {
  collectionName: 'components_sections_section_contacts';
  info: {
    displayName: 'Section: Contacts';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Wanna get in touch?'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Have a question or want to collaborate? Reach out to Jasmina directly. Whether you\u2019re looking to discuss partnerships, media inquiries, or simply connect, we\u2019re here to help you take the next step.'>;
    successMessage: Attribute.Text &
      Attribute.DefaultTo<'Thank you so much for your message! Jasmina will get back to you soon. Have more to say? Feel free to write another message below! '>;
  };
}

export interface SectionsSectionAboutLargeTitleWithQuestions
  extends Schema.Component {
  collectionName: 'components_sections_section_about_large_title_with_questions';
  info: {
    displayName: 'Section: About large title with questions';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'A Conversation with Jasmina'>;
    questions: Attribute.Component<'molecules.question-answer', true>;
    subtitle: Attribute.Text;
  };
}

export interface SectionsSectionAboutIntro extends Schema.Component {
  collectionName: 'components_sections_section_about_intros';
  info: {
    displayName: 'Section: About Intro';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    subtitle: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    bodyCopy: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface SectionsSectionAboutImagesGrid extends Schema.Component {
  collectionName: 'components_sections_section_about_images_grids';
  info: {
    displayName: 'Section: About images grid';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Dynamic. Thought-provoking. Unapologetically bold.'>;
    images: Attribute.Media<'images', true>;
    questions: Attribute.Component<'molecules.question-answer', true>;
  };
}

export interface SectionsSectionAboutFinal extends Schema.Component {
  collectionName: 'components_sections_section_about_finals';
  info: {
    displayName: 'Section: About final';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Join Jasmina in shaping the future'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Jasmina\u2019s voice cuts through the noise, making complex ideas accessible and inspiring action. Book her for your next event, podcast, or feature, and bring a fresh perspective to the conversation.'>;
    questions: Attribute.Component<'molecules.question-answer', true>;
  };
}

export interface MoleculesVideoNewsPost extends Schema.Component {
  collectionName: 'components_molecules_video_news_posts';
  info: {
    displayName: 'Video/News Post';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isVideo: Attribute.Boolean;
    description: Attribute.Text;
    link: Attribute.String & Attribute.Required;
    media: Attribute.Media<'images' | 'videos'>;
    category: Attribute.String;
  };
}

export interface MoleculesTextPageRelation extends Schema.Component {
  collectionName: 'components_molecules_text_page_relations';
  info: {
    displayName: 'Text/Page relation';
    description: '';
  };
  attributes: {
    description: Attribute.Text &
      Attribute.DefaultTo<'Stay informed with our cutting-edge Intelligence Report:'>;
    page: Attribute.Relation<
      'molecules.text-page-relation',
      'oneToOne',
      'plugin::navigation.audience'
    >;
    buttonLabel: Attribute.String;
  };
}

export interface MoleculesSocialList extends Schema.Component {
  collectionName: 'components_molecules_social_lists';
  info: {
    displayName: 'Social List';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Social Media:'>;
    items: Attribute.Component<'atoms.social-media-list-item', true>;
  };
}

export interface MoleculesQuote extends Schema.Component {
  collectionName: 'components_molecules_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    quote: Attribute.Text;
    cite: Attribute.String;
  };
}

export interface MoleculesQuestionAnswer extends Schema.Component {
  collectionName: 'components_molecules_question_answers';
  info: {
    displayName: 'Question/Answer';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface MoleculesPopup extends Schema.Component {
  collectionName: 'components_molecules_popups';
  info: {
    displayName: 'Popup';
  };
  attributes: {
    titleLeft: Attribute.String & Attribute.DefaultTo<'Join our'>;
    titleRight: Attribute.String & Attribute.DefaultTo<'community'>;
    description: Attribute.Text &
      Attribute.DefaultTo<'Join us in shaping this exciting future. Build your Longevity Intelligence today and be part of the coming renaissance in human capability.'>;
    successMessage: Attribute.Text &
      Attribute.DefaultTo<'Thank you for joining our community. A welcome email is on its way from Jasmina to your inbox.'>;
    buttonTitle: Attribute.String & Attribute.DefaultTo<'Join now'>;
  };
}

export interface MoleculesFaQs extends Schema.Component {
  collectionName: 'components_molecules_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'FAQ'>;
    items: Attribute.Component<'atoms.faq', true>;
  };
}

export interface AtomsTitleText extends Schema.Component {
  collectionName: 'components_atoms_title_texts';
  info: {
    displayName: 'Title/Text';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface AtomsTitleCkEditor extends Schema.Component {
  collectionName: 'components_atoms_title_ck_editors';
  info: {
    displayName: 'Title/CKEditor';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface AtomsSocialMediaListItem extends Schema.Component {
  collectionName: 'components_atoms_social_media_list_items';
  info: {
    displayName: 'Social Media List Item';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface AtomsReadMore extends Schema.Component {
  collectionName: 'components_atoms_read_mores';
  info: {
    displayName: 'Read more';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Learn More'>;
    link: Attribute.String;
  };
}

export interface AtomsPeople extends Schema.Component {
  collectionName: 'components_atoms_people';
  info: {
    displayName: 'People';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    website: Attribute.String;
    websiteLabel: Attribute.String & Attribute.DefaultTo<'Website'>;
  };
}

export interface AtomsImageTitleContentButton extends Schema.Component {
  collectionName: 'components_atoms_image_title_content_buttons';
  info: {
    displayName: 'Image/Title/Content/Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    buttonLink: Attribute.String;
    buttonLabel: Attribute.String;
    page: Attribute.Relation<
      'atoms.image-title-content-button',
      'oneToOne',
      'plugin::navigation.audience'
    >;
  };
}

export interface AtomsImageCkEditor extends Schema.Component {
  collectionName: 'components_atoms_image_ck_editors';
  info: {
    displayName: 'Image/CKEditor';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface AtomsFaq extends Schema.Component {
  collectionName: 'components_atoms_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface AtomsBookTv extends Schema.Component {
  collectionName: 'components_atoms_book_tvs';
  info: {
    displayName: 'Book/TV';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'>;
    link: Attribute.String & Attribute.Required;
    category: Attribute.Enumeration<['TV', 'Book']>;
  };
}

export interface AtomsAtomsIconText extends Schema.Component {
  collectionName: 'components_atoms_atoms_icon_texts';
  info: {
    displayName: 'Icon/Text';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AtomsAccordionRow extends Schema.Component {
  collectionName: 'components_atoms_accordion_rows';
  info: {
    displayName: 'Accordion row';
  };
  attributes: {
    title: Attribute.String;
    label: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'sections.ventures-final-section': SectionsVenturesFinalSection;
      'sections.section-ventures-playbook': SectionsSectionVenturesPlaybook;
      'sections.section-ventures-intro': SectionsSectionVenturesIntro;
      'sections.section-ventures-hand-section': SectionsSectionVenturesHandSection;
      'sections.section-reserve-book': SectionsSectionReserveBook;
      'sections.section-report-footer': SectionsSectionReportFooter;
      'sections.section-marquee-line': SectionsSectionMarqueeLine;
      'sections.section-longevity-key': SectionsSectionLongevityKey;
      'sections.section-longevity-intro': SectionsSectionLongevityIntro;
      'sections.section-longevity-final': SectionsSectionLongevityFinal;
      'sections.section-library-quotes': SectionsSectionLibraryQuotes;
      'sections.section-library-people': SectionsSectionLibraryPeople;
      'sections.section-library-news-media': SectionsSectionLibraryNewsMedia;
      'sections.section-library-book-tv': SectionsSectionLibraryBookTv;
      'sections.section-key-skills': SectionsSectionKeySkills;
      'sections.section-home-visionary': SectionsSectionHomeVisionary;
      'sections.section-home-longevity-intelligence': SectionsSectionHomeLongevityIntelligence;
      'sections.section-home-intro': SectionsSectionHomeIntro;
      'sections.section-entry-section-content': SectionsSectionEntrySectionContent;
      'sections.section-contacts': SectionsSectionContacts;
      'sections.section-about-large-title-with-questions': SectionsSectionAboutLargeTitleWithQuestions;
      'sections.section-about-intro': SectionsSectionAboutIntro;
      'sections.section-about-images-grid': SectionsSectionAboutImagesGrid;
      'sections.section-about-final': SectionsSectionAboutFinal;
      'molecules.video-news-post': MoleculesVideoNewsPost;
      'molecules.text-page-relation': MoleculesTextPageRelation;
      'molecules.social-list': MoleculesSocialList;
      'molecules.quote': MoleculesQuote;
      'molecules.question-answer': MoleculesQuestionAnswer;
      'molecules.popup': MoleculesPopup;
      'molecules.fa-qs': MoleculesFaQs;
      'atoms.title-text': AtomsTitleText;
      'atoms.title-ck-editor': AtomsTitleCkEditor;
      'atoms.social-media-list-item': AtomsSocialMediaListItem;
      'atoms.read-more': AtomsReadMore;
      'atoms.people': AtomsPeople;
      'atoms.image-title-content-button': AtomsImageTitleContentButton;
      'atoms.image-ck-editor': AtomsImageCkEditor;
      'atoms.faq': AtomsFaq;
      'atoms.book-tv': AtomsBookTv;
      'atoms.atoms-icon-text': AtomsAtomsIconText;
      'atoms.accordion-row': AtomsAccordionRow;
    }
  }
}
