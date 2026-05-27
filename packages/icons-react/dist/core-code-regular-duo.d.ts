import React from 'react';

export interface CoreCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCodeRegularDuo: React.FC<CoreCodeRegularDuoProps>;
export default CoreCodeRegularDuo;
