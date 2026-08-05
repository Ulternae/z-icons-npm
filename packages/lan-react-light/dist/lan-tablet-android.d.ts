import React from 'react';

export interface LanTabletAndroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletAndroid(props: LanTabletAndroidProps): React.ReactElement;
export default LanTabletAndroid;
