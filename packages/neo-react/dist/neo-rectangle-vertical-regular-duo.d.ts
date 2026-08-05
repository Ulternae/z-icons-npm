import React from 'react';

export interface NeoRectangleVerticalRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleVerticalRegularDuo(props: NeoRectangleVerticalRegularDuoProps): React.ReactElement;
export default NeoRectangleVerticalRegularDuo;
