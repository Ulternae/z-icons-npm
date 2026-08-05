import React from 'react';

export interface LanConveyorBeltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBelt(props: LanConveyorBeltProps): React.ReactElement;
export default LanConveyorBelt;
