import React from 'react';

export interface CoreDiamondRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDiamondRegularDuo: React.FC<CoreDiamondRegularDuoProps>;
export default CoreDiamondRegularDuo;
