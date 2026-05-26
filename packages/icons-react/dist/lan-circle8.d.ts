import React from 'react';

export interface LanCircle8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle8: React.FC<LanCircle8Props>;
export default LanCircle8;
