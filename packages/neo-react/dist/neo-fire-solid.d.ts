import React from 'react';

export interface NeoFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFireSolid(props: NeoFireSolidProps): React.ReactElement;
export default NeoFireSolid;
