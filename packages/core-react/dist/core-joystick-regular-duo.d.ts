import React from 'react';

export interface CoreJoystickRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreJoystickRegularDuo(props: CoreJoystickRegularDuoProps): React.ReactElement;
export default CoreJoystickRegularDuo;
