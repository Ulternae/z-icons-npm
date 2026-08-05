import React from 'react';

export interface LanChessPawnAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessPawnAltSolid(props: LanChessPawnAltSolidProps): React.ReactElement;
export default LanChessPawnAltSolid;
