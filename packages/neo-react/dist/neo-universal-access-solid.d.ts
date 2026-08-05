import React from 'react';

export interface NeoUniversalAccessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUniversalAccessSolid(props: NeoUniversalAccessSolidProps): React.ReactElement;
export default NeoUniversalAccessSolid;
