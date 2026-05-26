import React from 'react';

export interface LanMicrochipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrochipThin: React.FC<LanMicrochipThinProps>;
export default LanMicrochipThin;
