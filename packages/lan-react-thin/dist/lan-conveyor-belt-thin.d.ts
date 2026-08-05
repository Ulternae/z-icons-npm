import React from 'react';

export interface LanConveyorBeltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltThin(props: LanConveyorBeltThinProps): React.ReactElement;
export default LanConveyorBeltThin;
