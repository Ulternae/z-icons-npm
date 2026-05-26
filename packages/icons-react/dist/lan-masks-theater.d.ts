import React from 'react';

export interface LanMasksTheaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMasksTheater: React.FC<LanMasksTheaterProps>;
export default LanMasksTheater;
