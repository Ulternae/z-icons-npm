import React from 'react';

export interface NeoHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHandSolid(props: NeoHandSolidProps): React.ReactElement;
export default NeoHandSolid;
