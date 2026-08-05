import React from 'react';

export interface LanChessBoardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBoardSolid(props: LanChessBoardSolidProps): React.ReactElement;
export default LanChessBoardSolid;
