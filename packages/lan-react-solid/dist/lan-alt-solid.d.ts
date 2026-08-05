import React from 'react';

export interface LanAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAltSolid(props: LanAltSolidProps): React.ReactElement;
export default LanAltSolid;
