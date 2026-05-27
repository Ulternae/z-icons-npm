import React from 'react';

export interface CoreRectangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleRegularDuo: React.FC<CoreRectangleRegularDuoProps>;
export default CoreRectangleRegularDuo;
