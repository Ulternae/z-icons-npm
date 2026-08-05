import React from 'react';

export interface LanCloudMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudMoon(props: LanCloudMoonProps): React.ReactElement;
export default LanCloudMoon;
