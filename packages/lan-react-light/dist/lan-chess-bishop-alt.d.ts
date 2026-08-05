import React from 'react';

export interface LanChessBishopAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBishopAlt(props: LanChessBishopAltProps): React.ReactElement;
export default LanChessBishopAlt;
