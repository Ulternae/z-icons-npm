import React from 'react';

export interface LanRouteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRouteThin: React.FC<LanRouteThinProps>;
export default LanRouteThin;
