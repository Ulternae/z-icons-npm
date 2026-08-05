import React from 'react';

export interface MinaCloudSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudSun(props: MinaCloudSunProps): React.ReactElement;
export default MinaCloudSun;
