import React from 'react';

export interface LanPersonChalkboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonChalkboard: React.FC<LanPersonChalkboardProps>;
export default LanPersonChalkboard;
