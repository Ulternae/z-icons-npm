import React from 'react';

export interface CoreCloudMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudMoon: React.FC<CoreCloudMoonProps>;
export default CoreCloudMoon;
