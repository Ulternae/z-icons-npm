import React from 'react';

export interface LanRubleSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRubleSign: React.FC<LanRubleSignProps>;
export default LanRubleSign;
