import React from 'react';

export interface LanMustacheThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMustacheThin: React.FC<LanMustacheThinProps>;
export default LanMustacheThin;
