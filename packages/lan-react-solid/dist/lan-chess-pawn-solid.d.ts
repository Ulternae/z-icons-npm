import React from 'react';

export interface LanChessPawnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessPawnSolid(props: LanChessPawnSolidProps): React.ReactElement;
export default LanChessPawnSolid;
