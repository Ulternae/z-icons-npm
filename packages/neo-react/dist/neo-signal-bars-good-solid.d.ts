import React from 'react';

export interface NeoSignalBarsGoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsGoodSolid(props: NeoSignalBarsGoodSolidProps): React.ReactElement;
export default NeoSignalBarsGoodSolid;
