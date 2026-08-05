import React from 'react';

export interface CoreScissorsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreScissorsRegularDuo(props: CoreScissorsRegularDuoProps): React.ReactElement;
export default CoreScissorsRegularDuo;
