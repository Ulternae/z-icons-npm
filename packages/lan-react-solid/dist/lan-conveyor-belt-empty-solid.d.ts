import React from 'react';

export interface LanConveyorBeltEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltEmptySolid(props: LanConveyorBeltEmptySolidProps): React.ReactElement;
export default LanConveyorBeltEmptySolid;
