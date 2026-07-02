import React from 'react';

export interface CoreShieldRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShieldRegularDuo(props: CoreShieldRegularDuoProps): React.ReactElement;
export default CoreShieldRegularDuo;
