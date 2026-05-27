import React from 'react';

export interface CoreBombProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBomb: React.FC<CoreBombProps>;
export default CoreBomb;
