import React from 'react';

export interface NeoAngleUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleUpSolid: React.FC<NeoAngleUpSolidProps>;
export default NeoAngleUpSolid;
