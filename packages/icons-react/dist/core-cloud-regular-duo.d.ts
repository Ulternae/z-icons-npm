import React from 'react';

export interface CoreCloudRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudRegularDuo: React.FC<CoreCloudRegularDuoProps>;
export default CoreCloudRegularDuo;
