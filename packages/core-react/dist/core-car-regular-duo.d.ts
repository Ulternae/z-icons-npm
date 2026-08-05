import React from 'react';

export interface CoreCarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCarRegularDuo(props: CoreCarRegularDuoProps): React.ReactElement;
export default CoreCarRegularDuo;
