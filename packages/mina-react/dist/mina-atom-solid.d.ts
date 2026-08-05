import React from 'react';

export interface MinaAtomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAtomSolid(props: MinaAtomSolidProps): React.ReactElement;
export default MinaAtomSolid;
