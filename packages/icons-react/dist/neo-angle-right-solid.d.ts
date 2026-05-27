import React from 'react';

export interface NeoAngleRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleRightSolid: React.FC<NeoAngleRightSolidProps>;
export default NeoAngleRightSolid;
