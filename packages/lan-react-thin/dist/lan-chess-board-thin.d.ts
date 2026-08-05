import React from 'react';

export interface LanChessBoardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessBoardThin(props: LanChessBoardThinProps): React.ReactElement;
export default LanChessBoardThin;
