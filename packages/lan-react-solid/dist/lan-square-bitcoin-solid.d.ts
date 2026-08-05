import React from 'react';

export interface LanSquareBitcoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBitcoinSolid(props: LanSquareBitcoinSolidProps): React.ReactElement;
export default LanSquareBitcoinSolid;
