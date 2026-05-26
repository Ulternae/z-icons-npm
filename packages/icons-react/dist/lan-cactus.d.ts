import React from 'react';

export interface LanCactusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCactus: React.FC<LanCactusProps>;
export default LanCactus;
