import React from 'react';

export interface CoreCompassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompassRegularDuo: React.FC<CoreCompassRegularDuoProps>;
export default CoreCompassRegularDuo;
