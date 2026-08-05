import React from 'react';

export interface NeoSquareCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSquareCodeRegularDuo(props: NeoSquareCodeRegularDuoProps): React.ReactElement;
export default NeoSquareCodeRegularDuo;
