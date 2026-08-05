import React from 'react';

export interface LanConveyorBeltEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltEmpty(props: LanConveyorBeltEmptyProps): React.ReactElement;
export default LanConveyorBeltEmpty;
