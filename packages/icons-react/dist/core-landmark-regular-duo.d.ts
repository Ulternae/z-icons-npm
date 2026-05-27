import React from 'react';

export interface CoreLandmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLandmarkRegularDuo: React.FC<CoreLandmarkRegularDuoProps>;
export default CoreLandmarkRegularDuo;
