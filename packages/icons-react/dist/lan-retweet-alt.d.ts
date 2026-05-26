import React from 'react';

export interface LanRetweetAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRetweetAlt: React.FC<LanRetweetAltProps>;
export default LanRetweetAlt;
