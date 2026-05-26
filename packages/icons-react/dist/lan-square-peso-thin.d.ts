import React from 'react';

export interface LanSquarePesoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePesoThin: React.FC<LanSquarePesoThinProps>;
export default LanSquarePesoThin;
