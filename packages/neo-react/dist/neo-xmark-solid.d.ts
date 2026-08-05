import React from 'react';

export interface NeoXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoXmarkSolid(props: NeoXmarkSolidProps): React.ReactElement;
export default NeoXmarkSolid;
