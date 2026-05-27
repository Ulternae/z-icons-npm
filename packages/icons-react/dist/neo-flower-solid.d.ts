import React from 'react';

export interface NeoFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFlowerSolid: React.FC<NeoFlowerSolidProps>;
export default NeoFlowerSolid;
