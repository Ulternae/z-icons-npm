import React from 'react';

export interface LanHandHornsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHorns: React.FC<LanHandHornsProps>;
export default LanHandHorns;
