import React from 'react';

export interface CorePhoneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhoneRegularDuo: React.FC<CorePhoneRegularDuoProps>;
export default CorePhoneRegularDuo;
