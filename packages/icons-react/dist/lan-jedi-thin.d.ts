import React from 'react';

export interface LanJediThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJediThin: React.FC<LanJediThinProps>;
export default LanJediThin;
