import React from 'react';

export interface LanMapSignsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapSigns: React.FC<LanMapSignsProps>;
export default LanMapSigns;
