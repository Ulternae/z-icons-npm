import React from 'react';

export interface CorePlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlaneRegularDuo: React.FC<CorePlaneRegularDuoProps>;
export default CorePlaneRegularDuo;
