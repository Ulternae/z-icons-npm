import React from 'react';

export interface LanPeopleDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleDress: React.FC<LanPeopleDressProps>;
export default LanPeopleDress;
