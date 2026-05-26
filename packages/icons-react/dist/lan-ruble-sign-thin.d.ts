import React from 'react';

export interface LanRubleSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRubleSignThin: React.FC<LanRubleSignThinProps>;
export default LanRubleSignThin;
