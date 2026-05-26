import React from 'react';

export interface LanHandHoldingBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingBoxSolid: React.FC<LanHandHoldingBoxSolidProps>;
export default LanHandHoldingBoxSolid;
