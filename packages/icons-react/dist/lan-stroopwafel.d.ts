import React from 'react';

export interface LanStroopwafelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStroopwafel: React.FC<LanStroopwafelProps>;
export default LanStroopwafel;
