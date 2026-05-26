import React from 'react';

export interface LanHorseHeadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseHead: React.FC<LanHorseHeadProps>;
export default LanHorseHead;
