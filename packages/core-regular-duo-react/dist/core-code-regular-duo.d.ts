import React from 'react';

export interface CoreCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCodeRegularDuo(props: CoreCodeRegularDuoProps): React.ReactElement;
export default CoreCodeRegularDuo;
