import React from 'react';

export interface LanCupTogoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupTogo: React.FC<LanCupTogoProps>;
export default LanCupTogo;
