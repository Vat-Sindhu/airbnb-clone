import { VscNoNewline } from "react-icons/vsc";

export const flexBetween={
    display:'flex',
    justifyContent:'space-between'
};

export const flexBetweenCenter={
    display:'flex',
    justifyContent:{xs:'center',md:'space-between'},
    alignItems:'center'
};

export const footerLayout={
    display:'flex',
    flexDirection:{sx:'column'},
    justifyContent:{xs:'center',md:'space-between'},
    alignItems:'center'
};
export const flexCenter={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
};
export const fullWidthFlex={
    display:'flex',
    width:'100%',
};
export const justifyCenter = { display: 'flex', justifyContent: 'center' };
export const dFlex={
    display:'flex',
    flexDirection:'row',
};
export const fixedBottom={
    position:'absolute',
    bottom:100,
    width:'100%'

};
// Custom carousel style
export const carouselDot={
    color: '#ffff',
    backgroundColor: '#000',
    opacity:0.5,
    borderRadius:10,
    p:1,
    minWidth: 'auto',
};
export const fixedIcon={
    position: 'absolute',
    right:10,
    top:10,
    zIndex:10,
};
export const carouselImage={
    height:275,
    width:300,
    display:'block',
    overflow:'hidden',
    borderRadius:3,

};

export const displayOnDesktop={display:{xs:'none',md:'block'}}
