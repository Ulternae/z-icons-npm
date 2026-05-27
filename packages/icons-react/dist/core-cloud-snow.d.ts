import React from 'react';

export interface CoreCloudSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudSnow: React.FC<CoreCloudSnowProps>;
export default CoreCloudSnow;
