import React from 'react';

export interface LanAtomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtom(props: LanAtomProps): React.ReactElement;
export default LanAtom;
