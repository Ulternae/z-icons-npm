import React from 'react';

export interface LanProjectorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanProjector: React.FC<LanProjectorProps>;
export default LanProjector;
