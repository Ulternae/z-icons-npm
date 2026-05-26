import React from 'react';

export interface LanSnakeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnakeThin: React.FC<LanSnakeThinProps>;
export default LanSnakeThin;
