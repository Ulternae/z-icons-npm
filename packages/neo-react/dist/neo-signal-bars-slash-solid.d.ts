import React from 'react';

export interface NeoSignalBarsSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsSlashSolid(props: NeoSignalBarsSlashSolidProps): React.ReactElement;
export default NeoSignalBarsSlashSolid;
