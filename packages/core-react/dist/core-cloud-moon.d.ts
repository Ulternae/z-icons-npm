import React from 'react';

export interface CoreCloudMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudMoon(props: CoreCloudMoonProps): React.ReactElement;
export default CoreCloudMoon;
