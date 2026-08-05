import React from 'react';

export interface NeoSignalBarsWeakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsWeakSolid(props: NeoSignalBarsWeakSolidProps): React.ReactElement;
export default NeoSignalBarsWeakSolid;
