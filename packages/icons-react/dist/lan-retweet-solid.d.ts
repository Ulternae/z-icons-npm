import React from 'react';

export interface LanRetweetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRetweetSolid: React.FC<LanRetweetSolidProps>;
export default LanRetweetSolid;
