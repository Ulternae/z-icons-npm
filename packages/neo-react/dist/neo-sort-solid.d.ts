import React from 'react';

export interface NeoSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSortSolid(props: NeoSortSolidProps): React.ReactElement;
export default NeoSortSolid;
