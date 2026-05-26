import React from 'react';

export interface LanAppleCrateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCrateSolid: React.FC<LanAppleCrateSolidProps>;
export default LanAppleCrateSolid;
