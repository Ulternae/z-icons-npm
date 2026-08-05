import React from 'react';

export interface MinaCloudMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudMoon(props: MinaCloudMoonProps): React.ReactElement;
export default MinaCloudMoon;
