import React from 'react';

export interface NeoCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCheckSolid: React.FC<NeoCheckSolidProps>;
export default NeoCheckSolid;
