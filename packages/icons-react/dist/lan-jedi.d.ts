import React from 'react';

export interface LanJediProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJedi: React.FC<LanJediProps>;
export default LanJedi;
