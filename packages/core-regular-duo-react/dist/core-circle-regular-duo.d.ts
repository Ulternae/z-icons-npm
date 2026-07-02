import React from 'react';

export interface CoreCircleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleRegularDuo(props: CoreCircleRegularDuoProps): React.ReactElement;
export default CoreCircleRegularDuo;
