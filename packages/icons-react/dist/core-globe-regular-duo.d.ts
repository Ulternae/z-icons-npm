import React from 'react';

export interface CoreGlobeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGlobeRegularDuo: React.FC<CoreGlobeRegularDuoProps>;
export default CoreGlobeRegularDuo;
