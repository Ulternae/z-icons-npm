import React from 'react';

export interface LanCircleShekelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleShekel: React.FC<LanCircleShekelProps>;
export default LanCircleShekel;
