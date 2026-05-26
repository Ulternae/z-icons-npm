import React from 'react';

export interface LanH6Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH6: React.FC<LanH6Props>;
export default LanH6;
