import React from 'react';

export interface LanTreeChristmasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeChristmas: React.FC<LanTreeChristmasProps>;
export default LanTreeChristmas;
