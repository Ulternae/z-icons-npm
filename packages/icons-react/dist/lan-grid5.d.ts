import React from 'react';

export interface LanGrid5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid5: React.FC<LanGrid5Props>;
export default LanGrid5;
