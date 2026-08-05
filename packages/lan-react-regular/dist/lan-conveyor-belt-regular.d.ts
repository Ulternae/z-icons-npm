import React from 'react';

export interface LanConveyorBeltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltRegular(props: LanConveyorBeltRegularProps): React.ReactElement;
export default LanConveyorBeltRegular;
