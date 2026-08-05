import React from 'react';

export interface CoreTreeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTreeRegularDuo(props: CoreTreeRegularDuoProps): React.ReactElement;
export default CoreTreeRegularDuo;
