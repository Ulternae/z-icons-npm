import React from 'react';

export interface LanChessBishopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBishopSolid(props: LanChessBishopSolidProps): React.ReactElement;
export default LanChessBishopSolid;
