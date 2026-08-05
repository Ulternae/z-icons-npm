import React from 'react';

export interface LanCoconutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoconutSolid(props: LanCoconutSolidProps): React.ReactElement;
export default LanCoconutSolid;
