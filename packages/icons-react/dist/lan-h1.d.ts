import React from 'react';

export interface LanH1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH1: React.FC<LanH1Props>;
export default LanH1;
