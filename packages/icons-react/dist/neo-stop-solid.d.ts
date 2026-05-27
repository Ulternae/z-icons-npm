import React from 'react';

export interface NeoStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStopSolid: React.FC<NeoStopSolidProps>;
export default NeoStopSolid;
