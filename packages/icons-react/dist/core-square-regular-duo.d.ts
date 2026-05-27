import React from 'react';

export interface CoreSquareRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSquareRegularDuo: React.FC<CoreSquareRegularDuoProps>;
export default CoreSquareRegularDuo;
