import React from 'react';

export interface CoreSquareRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSquareRegularDuo(props: CoreSquareRegularDuoProps): React.ReactElement;
export default CoreSquareRegularDuo;
