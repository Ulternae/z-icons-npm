import React from 'react';

export interface LanFlagAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagAltSolid(props: LanFlagAltSolidProps): React.ReactElement;
export default LanFlagAltSolid;
