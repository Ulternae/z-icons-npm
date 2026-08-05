import React from 'react';

export interface NeoPercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPercentSolid(props: NeoPercentSolidProps): React.ReactElement;
export default NeoPercentSolid;
