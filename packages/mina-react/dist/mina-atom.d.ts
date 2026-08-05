import React from 'react';

export interface MinaAtomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAtom(props: MinaAtomProps): React.ReactElement;
export default MinaAtom;
