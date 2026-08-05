import React from 'react';

export interface LanFileAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAltSolid(props: LanFileAltSolidProps): React.ReactElement;
export default LanFileAltSolid;
