import React from 'react';

export interface LanRetweetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRetweetRegular: React.FC<LanRetweetRegularProps>;
export default LanRetweetRegular;
