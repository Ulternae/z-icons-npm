import React from 'react';

export interface LanMugTeaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTea: React.FC<LanMugTeaProps>;
export default LanMugTea;
