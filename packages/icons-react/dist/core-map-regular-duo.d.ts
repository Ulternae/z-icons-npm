import React from 'react';

export interface CoreMapRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMapRegularDuo: React.FC<CoreMapRegularDuoProps>;
export default CoreMapRegularDuo;
