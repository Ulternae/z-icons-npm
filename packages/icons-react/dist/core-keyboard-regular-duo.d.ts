import React from 'react';

export interface CoreKeyboardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreKeyboardRegularDuo: React.FC<CoreKeyboardRegularDuoProps>;
export default CoreKeyboardRegularDuo;
