import React from 'react';

export interface LanWindowAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowAltSolid(props: LanWindowAltSolidProps): React.ReactElement;
export default LanWindowAltSolid;
