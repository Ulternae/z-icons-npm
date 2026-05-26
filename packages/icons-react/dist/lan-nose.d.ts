import React from 'react';

export interface LanNoseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNose: React.FC<LanNoseProps>;
export default LanNose;
