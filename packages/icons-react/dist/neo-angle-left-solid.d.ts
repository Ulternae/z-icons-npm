import React from 'react';

export interface NeoAngleLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleLeftSolid: React.FC<NeoAngleLeftSolidProps>;
export default NeoAngleLeftSolid;
