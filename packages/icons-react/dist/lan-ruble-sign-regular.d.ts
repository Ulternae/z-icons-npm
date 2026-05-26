import React from 'react';

export interface LanRubleSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRubleSignRegular: React.FC<LanRubleSignRegularProps>;
export default LanRubleSignRegular;
