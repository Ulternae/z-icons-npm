import React from 'react';

export interface NeoTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTreeSolid(props: NeoTreeSolidProps): React.ReactElement;
export default NeoTreeSolid;
