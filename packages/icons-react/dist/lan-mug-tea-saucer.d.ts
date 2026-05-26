import React from 'react';

export interface LanMugTeaSaucerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTeaSaucer: React.FC<LanMugTeaSaucerProps>;
export default LanMugTeaSaucer;
