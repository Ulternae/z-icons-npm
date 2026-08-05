import React from 'react';

export interface LanCloudSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSunThin(props: LanCloudSunThinProps): React.ReactElement;
export default LanCloudSunThin;
