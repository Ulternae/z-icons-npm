import React from 'react';

export interface NeoSignalBarsSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsSlashSolid: React.FC<NeoSignalBarsSlashSolidProps>;
export default NeoSignalBarsSlashSolid;
