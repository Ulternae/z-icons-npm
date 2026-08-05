import React from 'react';

export interface NeoBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBookOpenSolid(props: NeoBookOpenSolidProps): React.ReactElement;
export default NeoBookOpenSolid;
