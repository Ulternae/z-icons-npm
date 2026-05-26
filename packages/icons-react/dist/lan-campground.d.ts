import React from 'react';

export interface LanCampgroundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampground: React.FC<LanCampgroundProps>;
export default LanCampground;
