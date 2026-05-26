import React from 'react';

export interface LanMugTeaSaucerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTeaSaucerThin: React.FC<LanMugTeaSaucerThinProps>;
export default LanMugTeaSaucerThin;
