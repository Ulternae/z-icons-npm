import React from 'react';

export interface CoreTriangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTriangleRegularDuo(props: CoreTriangleRegularDuoProps): React.ReactElement;
export default CoreTriangleRegularDuo;
