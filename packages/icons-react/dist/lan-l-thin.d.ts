import React from 'react';

export interface LanLThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLThin: React.FC<LanLThinProps>;
export default LanLThin;
