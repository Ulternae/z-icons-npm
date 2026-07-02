import React from 'react';

export interface CoreCloudSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudSun(props: CoreCloudSunProps): React.ReactElement;
export default CoreCloudSun;
