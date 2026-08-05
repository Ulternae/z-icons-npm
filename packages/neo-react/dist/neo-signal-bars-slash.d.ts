import React from 'react';

export interface NeoSignalBarsSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsSlash(props: NeoSignalBarsSlashProps): React.ReactElement;
export default NeoSignalBarsSlash;
