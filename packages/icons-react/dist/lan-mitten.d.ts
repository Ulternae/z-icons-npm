import React from 'react';

export interface LanMittenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMitten: React.FC<LanMittenProps>;
export default LanMitten;
