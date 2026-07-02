import React from 'react';

export interface CoreKeyboardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreKeyboardRegularDuo(props: CoreKeyboardRegularDuoProps): React.ReactElement;
export default CoreKeyboardRegularDuo;
