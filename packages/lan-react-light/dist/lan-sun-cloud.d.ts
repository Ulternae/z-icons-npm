import React from 'react';

export interface LanSunCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunCloud(props: LanSunCloudProps): React.ReactElement;
export default LanSunCloud;
