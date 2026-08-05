import React from 'react';

export interface CoreShirtRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShirtRegularDuo(props: CoreShirtRegularDuoProps): React.ReactElement;
export default CoreShirtRegularDuo;
