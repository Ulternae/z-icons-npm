import React from 'react';

export interface NeoBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBoxSolid(props: NeoBoxSolidProps): React.ReactElement;
export default NeoBoxSolid;
