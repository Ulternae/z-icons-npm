import React from 'react';

export interface NeoUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUserSolid(props: NeoUserSolidProps): React.ReactElement;
export default NeoUserSolid;
