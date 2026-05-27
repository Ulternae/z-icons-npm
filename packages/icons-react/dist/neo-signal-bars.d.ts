import React from 'react';

export interface NeoSignalBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBars: React.FC<NeoSignalBarsProps>;
export default NeoSignalBars;
