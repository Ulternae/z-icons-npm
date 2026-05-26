import React from 'react';

export interface LanRetweetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRetweet: React.FC<LanRetweetProps>;
export default LanRetweet;
