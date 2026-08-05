import React from 'react';

export interface LanAtomAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtomAltSolid(props: LanAtomAltSolidProps): React.ReactElement;
export default LanAtomAltSolid;
