import React from 'react';

export interface LanChessBishopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBishop(props: LanChessBishopProps): React.ReactElement;
export default LanChessBishop;
