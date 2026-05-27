import React from 'react';

export interface CoreRectangleTallRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleTallRegularDuo: React.FC<CoreRectangleTallRegularDuoProps>;
export default CoreRectangleTallRegularDuo;
