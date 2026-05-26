import React from 'react';

export interface LanSThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSThin: React.FC<LanSThinProps>;
export default LanSThin;
