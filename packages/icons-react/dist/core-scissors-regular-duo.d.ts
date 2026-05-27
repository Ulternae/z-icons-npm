import React from 'react';

export interface CoreScissorsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreScissorsRegularDuo: React.FC<CoreScissorsRegularDuoProps>;
export default CoreScissorsRegularDuo;
