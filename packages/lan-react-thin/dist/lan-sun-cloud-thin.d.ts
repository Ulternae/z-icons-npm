import React from 'react';

export interface LanSunCloudThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunCloudThin(props: LanSunCloudThinProps): React.ReactElement;
export default LanSunCloudThin;
