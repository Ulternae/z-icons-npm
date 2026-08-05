import React from 'react';

export interface LanConveyorBeltAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltAlt(props: LanConveyorBeltAltProps): React.ReactElement;
export default LanConveyorBeltAlt;
