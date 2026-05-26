import React from 'react';

export interface LanCircle5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle5: React.FC<LanCircle5Props>;
export default LanCircle5;
