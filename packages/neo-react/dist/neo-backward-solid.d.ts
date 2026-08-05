import React from 'react';

export interface NeoBackwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBackwardSolid(props: NeoBackwardSolidProps): React.ReactElement;
export default NeoBackwardSolid;
