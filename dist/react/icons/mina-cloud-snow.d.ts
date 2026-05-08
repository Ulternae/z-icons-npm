import React from 'react';

export interface MinaCloudSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudSnow: React.FC<MinaCloudSnowProps>;
export default MinaCloudSnow;
