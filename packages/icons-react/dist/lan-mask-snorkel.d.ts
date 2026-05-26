import React from 'react';

export interface LanMaskSnorkelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskSnorkel: React.FC<LanMaskSnorkelProps>;
export default LanMaskSnorkel;
