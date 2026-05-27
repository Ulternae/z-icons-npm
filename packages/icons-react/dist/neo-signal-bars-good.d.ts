import React from 'react';

export interface NeoSignalBarsGoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsGood: React.FC<NeoSignalBarsGoodProps>;
export default NeoSignalBarsGood;
