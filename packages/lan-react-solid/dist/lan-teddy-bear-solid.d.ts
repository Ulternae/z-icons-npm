import React from 'react';

export interface LanTeddyBearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeddyBearSolid(props: LanTeddyBearSolidProps): React.ReactElement;
export default LanTeddyBearSolid;
