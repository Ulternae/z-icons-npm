import React from 'react';

export interface CoreCameraRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCameraRegularDuo: React.FC<CoreCameraRegularDuoProps>;
export default CoreCameraRegularDuo;
