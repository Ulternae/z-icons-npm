import React from 'react';

export interface LanTabletAndroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletAndroid: React.FC<LanTabletAndroidProps>;
export default LanTabletAndroid;
