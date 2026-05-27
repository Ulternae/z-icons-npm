import React from 'react';

export interface CoreShieldRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShieldRegularDuo: React.FC<CoreShieldRegularDuoProps>;
export default CoreShieldRegularDuo;
