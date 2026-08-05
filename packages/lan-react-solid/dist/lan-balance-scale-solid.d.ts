import React from 'react';

export interface LanBalanceScaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalanceScaleSolid(props: LanBalanceScaleSolidProps): React.ReactElement;
export default LanBalanceScaleSolid;
