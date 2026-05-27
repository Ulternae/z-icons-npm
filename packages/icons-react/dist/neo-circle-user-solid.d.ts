import React from 'react';

export interface NeoCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleUserSolid: React.FC<NeoCircleUserSolidProps>;
export default NeoCircleUserSolid;
