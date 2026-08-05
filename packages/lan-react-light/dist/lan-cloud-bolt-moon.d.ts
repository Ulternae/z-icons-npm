import React from 'react';

export interface LanCloudBoltMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudBoltMoon(props: LanCloudBoltMoonProps): React.ReactElement;
export default LanCloudBoltMoon;
