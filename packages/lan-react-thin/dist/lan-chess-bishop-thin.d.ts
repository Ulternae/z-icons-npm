import React from 'react';

export interface LanChessBishopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBishopThin(props: LanChessBishopThinProps): React.ReactElement;
export default LanChessBishopThin;
