import React from 'react';

export interface LanAtomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtomSolid(props: LanAtomSolidProps): React.ReactElement;
export default LanAtomSolid;
