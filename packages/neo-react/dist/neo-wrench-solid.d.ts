import React from 'react';

export interface NeoWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWrenchSolid(props: NeoWrenchSolidProps): React.ReactElement;
export default NeoWrenchSolid;
