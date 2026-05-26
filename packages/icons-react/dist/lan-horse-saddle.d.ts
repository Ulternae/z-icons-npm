import React from 'react';

export interface LanHorseSaddleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseSaddle: React.FC<LanHorseSaddleProps>;
export default LanHorseSaddle;
