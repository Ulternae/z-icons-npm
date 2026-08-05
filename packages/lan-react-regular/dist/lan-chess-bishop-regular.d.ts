import React from 'react';

export interface LanChessBishopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBishopRegular(props: LanChessBishopRegularProps): React.ReactElement;
export default LanChessBishopRegular;
