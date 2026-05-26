import React from 'react';

export interface LanRectangleAdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleAd: React.FC<LanRectangleAdProps>;
export default LanRectangleAd;
