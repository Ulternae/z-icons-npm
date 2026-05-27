import React from 'react';

export interface CoreUserRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserRegularDuo: React.FC<CoreUserRegularDuoProps>;
export default CoreUserRegularDuo;
