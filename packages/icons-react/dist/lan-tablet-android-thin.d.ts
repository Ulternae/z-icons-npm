import React from 'react';

export interface LanTabletAndroidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletAndroidThin: React.FC<LanTabletAndroidThinProps>;
export default LanTabletAndroidThin;
