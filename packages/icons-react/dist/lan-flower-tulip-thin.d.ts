import React from 'react';

export interface LanFlowerTulipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlowerTulipThin: React.FC<LanFlowerTulipThinProps>;
export default LanFlowerTulipThin;
