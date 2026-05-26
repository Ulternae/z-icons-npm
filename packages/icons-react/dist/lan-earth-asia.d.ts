import React from 'react';

export interface LanEarthAsiaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthAsia: React.FC<LanEarthAsiaProps>;
export default LanEarthAsia;
