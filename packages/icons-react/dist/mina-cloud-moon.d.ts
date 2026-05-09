import React from 'react';

export interface MinaCloudMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudMoon: React.FC<MinaCloudMoonProps>;
export default MinaCloudMoon;
