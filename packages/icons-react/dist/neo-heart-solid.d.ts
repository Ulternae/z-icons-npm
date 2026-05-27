import React from 'react';

export interface NeoHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHeartSolid: React.FC<NeoHeartSolidProps>;
export default NeoHeartSolid;
