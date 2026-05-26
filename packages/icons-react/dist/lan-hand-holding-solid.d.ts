import React from 'react';

export interface LanHandHoldingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingSolid: React.FC<LanHandHoldingSolidProps>;
export default LanHandHoldingSolid;
