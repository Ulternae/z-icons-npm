import React from 'react';

export interface LanPeoplePullingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePullingThin: React.FC<LanPeoplePullingThinProps>;
export default LanPeoplePullingThin;
