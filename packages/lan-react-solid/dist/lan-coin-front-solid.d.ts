import React from 'react';

export interface LanCoinFrontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinFrontSolid(props: LanCoinFrontSolidProps): React.ReactElement;
export default LanCoinFrontSolid;
