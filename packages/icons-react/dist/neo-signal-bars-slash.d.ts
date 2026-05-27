import React from 'react';

export interface NeoSignalBarsSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsSlash: React.FC<NeoSignalBarsSlashProps>;
export default NeoSignalBarsSlash;
