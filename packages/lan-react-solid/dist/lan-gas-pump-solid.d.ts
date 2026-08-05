import React from 'react';

export interface LanGasPumpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGasPumpSolid(props: LanGasPumpSolidProps): React.ReactElement;
export default LanGasPumpSolid;
