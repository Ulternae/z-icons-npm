import React from 'react';

export interface LanPersonDotsFromLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDotsFromLineThin: React.FC<LanPersonDotsFromLineThinProps>;
export default LanPersonDotsFromLineThin;
