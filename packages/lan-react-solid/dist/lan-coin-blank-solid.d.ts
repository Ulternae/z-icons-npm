import React from 'react';

export interface LanCoinBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinBlankSolid(props: LanCoinBlankSolidProps): React.ReactElement;
export default LanCoinBlankSolid;
