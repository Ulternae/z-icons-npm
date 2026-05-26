import React from 'react';

export interface LanHandsClappingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsClappingSolid: React.FC<LanHandsClappingSolidProps>;
export default LanHandsClappingSolid;
