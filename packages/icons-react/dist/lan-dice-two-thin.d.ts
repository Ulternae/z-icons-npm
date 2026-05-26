import React from 'react';

export interface LanDiceTwoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceTwoThin: React.FC<LanDiceTwoThinProps>;
export default LanDiceTwoThin;
