import React from 'react';

export interface LanLemonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLemonThin: React.FC<LanLemonThinProps>;
export default LanLemonThin;
