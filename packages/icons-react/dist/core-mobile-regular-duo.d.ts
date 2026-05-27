import React from 'react';

export interface CoreMobileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMobileRegularDuo: React.FC<CoreMobileRegularDuoProps>;
export default CoreMobileRegularDuo;
