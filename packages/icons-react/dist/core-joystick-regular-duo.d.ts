import React from 'react';

export interface CoreJoystickRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreJoystickRegularDuo: React.FC<CoreJoystickRegularDuoProps>;
export default CoreJoystickRegularDuo;
