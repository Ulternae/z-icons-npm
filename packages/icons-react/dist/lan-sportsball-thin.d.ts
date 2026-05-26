import React from 'react';

export interface LanSportsballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSportsballThin: React.FC<LanSportsballThinProps>;
export default LanSportsballThin;
