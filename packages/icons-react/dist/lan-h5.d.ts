import React from 'react';

export interface LanH5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH5: React.FC<LanH5Props>;
export default LanH5;
