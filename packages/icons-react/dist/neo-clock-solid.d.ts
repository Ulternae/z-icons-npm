import React from 'react';

export interface NeoClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoClockSolid: React.FC<NeoClockSolidProps>;
export default NeoClockSolid;
