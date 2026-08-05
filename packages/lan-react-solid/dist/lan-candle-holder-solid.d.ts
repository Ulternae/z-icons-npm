import React from 'react';

export interface LanCandleHolderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandleHolderSolid(props: LanCandleHolderSolidProps): React.ReactElement;
export default LanCandleHolderSolid;
