import React from 'react';

export interface LanHandHoldingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingSolid(props: LanHandHoldingSolidProps): React.ReactElement;
export default LanHandHoldingSolid;
