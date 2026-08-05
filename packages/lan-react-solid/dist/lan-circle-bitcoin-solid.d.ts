import React from 'react';

export interface LanCircleBitcoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBitcoinSolid(props: LanCircleBitcoinSolidProps): React.ReactElement;
export default LanCircleBitcoinSolid;
