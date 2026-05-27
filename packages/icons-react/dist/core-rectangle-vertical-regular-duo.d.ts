import React from 'react';

export interface CoreRectangleVerticalRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleVerticalRegularDuo: React.FC<CoreRectangleVerticalRegularDuoProps>;
export default CoreRectangleVerticalRegularDuo;
