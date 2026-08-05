import React from 'react';

export interface NeoFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFilterSolid(props: NeoFilterSolidProps): React.ReactElement;
export default NeoFilterSolid;
