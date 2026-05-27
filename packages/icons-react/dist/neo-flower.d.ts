import React from 'react';

export interface NeoFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFlower: React.FC<NeoFlowerProps>;
export default NeoFlower;
