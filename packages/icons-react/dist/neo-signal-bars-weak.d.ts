import React from 'react';

export interface NeoSignalBarsWeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsWeak: React.FC<NeoSignalBarsWeakProps>;
export default NeoSignalBarsWeak;
