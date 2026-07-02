import React from 'react';

export interface CoreServerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreServerRegularDuo(props: CoreServerRegularDuoProps): React.ReactElement;
export default CoreServerRegularDuo;
