import React from 'react';

export interface NeoTriangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTriangleRegularDuo(props: NeoTriangleRegularDuoProps): React.ReactElement;
export default NeoTriangleRegularDuo;
