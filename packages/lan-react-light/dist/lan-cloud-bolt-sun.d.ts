import React from 'react';

export interface LanCloudBoltSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBoltSun(props: LanCloudBoltSunProps): React.ReactElement;
export default LanCloudBoltSun;
