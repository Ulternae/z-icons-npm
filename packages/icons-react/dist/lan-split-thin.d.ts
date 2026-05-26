import React from 'react';

export interface LanSplitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplitThin: React.FC<LanSplitThinProps>;
export default LanSplitThin;
