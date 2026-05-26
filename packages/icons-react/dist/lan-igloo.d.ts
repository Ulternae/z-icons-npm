import React from 'react';

export interface LanIglooProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIgloo: React.FC<LanIglooProps>;
export default LanIgloo;
