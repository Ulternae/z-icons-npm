import React from 'react';

export interface CorePlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlaneRegularDuo(props: CorePlaneRegularDuoProps): React.ReactElement;
export default CorePlaneRegularDuo;
