import React from 'react';

export interface NeoFlowerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFlowerRegularDuo: React.FC<NeoFlowerRegularDuoProps>;
export default NeoFlowerRegularDuo;
