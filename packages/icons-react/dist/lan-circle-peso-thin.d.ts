import React from 'react';

export interface LanCirclePesoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePesoThin: React.FC<LanCirclePesoThinProps>;
export default LanCirclePesoThin;
