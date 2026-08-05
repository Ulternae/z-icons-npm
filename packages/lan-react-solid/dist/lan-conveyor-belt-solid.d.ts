import React from 'react';

export interface LanConveyorBeltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltSolid(props: LanConveyorBeltSolidProps): React.ReactElement;
export default LanConveyorBeltSolid;
