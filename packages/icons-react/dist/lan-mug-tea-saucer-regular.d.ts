import React from 'react';

export interface LanMugTeaSaucerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTeaSaucerRegular: React.FC<LanMugTeaSaucerRegularProps>;
export default LanMugTeaSaucerRegular;
