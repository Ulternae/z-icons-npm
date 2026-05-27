import React from 'react';

export interface NeoCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleSolid: React.FC<NeoCircleSolidProps>;
export default NeoCircleSolid;
