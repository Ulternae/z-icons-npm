import React from 'react';

export interface LanCirclePesoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePeso: React.FC<LanCirclePesoProps>;
export default LanCirclePeso;
