import React from 'react';

export interface LanHandsHoldingCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingCircleSolid(props: LanHandsHoldingCircleSolidProps): React.ReactElement;
export default LanHandsHoldingCircleSolid;
