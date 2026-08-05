import React from 'react';

export interface LanHandsHoldingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingSolid(props: LanHandsHoldingSolidProps): React.ReactElement;
export default LanHandsHoldingSolid;
