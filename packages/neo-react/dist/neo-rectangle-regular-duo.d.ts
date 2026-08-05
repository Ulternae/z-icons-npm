import React from 'react';

export interface NeoRectangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleRegularDuo(props: NeoRectangleRegularDuoProps): React.ReactElement;
export default NeoRectangleRegularDuo;
