import React from 'react';

export interface NeoSquareRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSquareRegularDuo(props: NeoSquareRegularDuoProps): React.ReactElement;
export default NeoSquareRegularDuo;
