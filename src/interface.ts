interface Header_Props {
    planet: any;
    screenWidth: number;
    hover_color: string;
    onClick1: () => void;
    onClick2: () => void;
    onClick3: () => void;
  }
  
  interface Planet_info_Props {
    onClick1: () => void;
    bgColor1: string;
    onClick2: () => void;
    bgColor2: string;
    onClick3: () => void;
    bgColor3: string;
    planet_img_src: string | boolean | any;
    planet_surface_img_src: string;
    planet_name: string;
    planet_description: string | boolean;
    wiki_link: string | boolean | any;
    screenWidth: number;
    rotation_time: string;
    revolutin_time: string;
    radius: string;
    avarage_temp: string;
  }
  
  interface Planet_interactive_info_block_Props {
    onClick?: () => void;
    bgColor: string;
    numeric: string;
    value: string;
  }
  
  interface Planet_side_menu_Props {
    bgColor: string;
    planet_name: string;
  }
  
  interface Planet_facts_Props {
    parameter: string;
    fact: string;
  }
  