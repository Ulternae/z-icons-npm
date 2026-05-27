import React from 'react';

export interface CoreWindRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWindRegularDuo: React.FC<CoreWindRegularDuoProps>;
export default CoreWindRegularDuo;
