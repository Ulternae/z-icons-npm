import React from 'react';

export interface LanH4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH4: React.FC<LanH4Props>;
export default LanH4;
