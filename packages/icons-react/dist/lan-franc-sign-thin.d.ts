import React from 'react';

export interface LanFrancSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrancSignThin: React.FC<LanFrancSignThinProps>;
export default LanFrancSignThin;
