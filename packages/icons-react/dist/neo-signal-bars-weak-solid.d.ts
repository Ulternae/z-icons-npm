import React from 'react';

export interface NeoSignalBarsWeakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsWeakSolid: React.FC<NeoSignalBarsWeakSolidProps>;
export default NeoSignalBarsWeakSolid;
