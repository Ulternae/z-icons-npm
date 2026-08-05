import React from 'react';

export interface CoreImageRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreImageRegularDuo(props: CoreImageRegularDuoProps): React.ReactElement;
export default CoreImageRegularDuo;
