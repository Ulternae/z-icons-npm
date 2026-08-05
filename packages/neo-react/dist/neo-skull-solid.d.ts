import React from 'react';

export interface NeoSkullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSkullSolid(props: NeoSkullSolidProps): React.ReactElement;
export default NeoSkullSolid;
