import React from 'react';

export interface LanBorderStyleAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderStyleAltSolid(props: LanBorderStyleAltSolidProps): React.ReactElement;
export default LanBorderStyleAltSolid;
