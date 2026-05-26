import React from 'react';

export interface LanGripDotsVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripDotsVerticalSolid: React.FC<LanGripDotsVerticalSolidProps>;
export default LanGripDotsVerticalSolid;
