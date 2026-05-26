import React from 'react';

export interface LanHorseHeadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseHeadThin: React.FC<LanHorseHeadThinProps>;
export default LanHorseHeadThin;
