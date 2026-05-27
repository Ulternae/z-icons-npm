import React from 'react';

export interface CoreRectangleWideRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRectangleWideRegularDuo: React.FC<CoreRectangleWideRegularDuoProps>;
export default CoreRectangleWideRegularDuo;
