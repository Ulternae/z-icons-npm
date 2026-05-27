import React from 'react';

export interface NeoSignalBarsGoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsGoodSolid: React.FC<NeoSignalBarsGoodSolidProps>;
export default NeoSignalBarsGoodSolid;
