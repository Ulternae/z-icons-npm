import React from 'react';

export interface LanHandHornsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHornsSolid: React.FC<LanHandHornsSolidProps>;
export default LanHandHornsSolid;
