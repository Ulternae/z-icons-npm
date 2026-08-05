import React from 'react';

export interface LanCloudSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSun(props: LanCloudSunProps): React.ReactElement;
export default LanCloudSun;
