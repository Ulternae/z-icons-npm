import React from 'react';

export interface LanSneakerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneakerThin: React.FC<LanSneakerThinProps>;
export default LanSneakerThin;
