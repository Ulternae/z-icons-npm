import React from 'react';

export interface LanClapperboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClapperboard: React.FC<LanClapperboardProps>;
export default LanClapperboard;
