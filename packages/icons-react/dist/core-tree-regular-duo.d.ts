import React from 'react';

export interface CoreTreeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTreeRegularDuo: React.FC<CoreTreeRegularDuoProps>;
export default CoreTreeRegularDuo;
