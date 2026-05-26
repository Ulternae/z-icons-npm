import React from 'react';

export interface LanMaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaceThin: React.FC<LanMaceThinProps>;
export default LanMaceThin;
