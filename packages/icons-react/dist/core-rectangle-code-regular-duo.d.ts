import React from 'react';

export interface CoreRectangleCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleCodeRegularDuo: React.FC<CoreRectangleCodeRegularDuoProps>;
export default CoreRectangleCodeRegularDuo;
