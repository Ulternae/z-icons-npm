import React from 'react';

export interface LanSneakerRunningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneakerRunningThin: React.FC<LanSneakerRunningThinProps>;
export default LanSneakerRunningThin;
