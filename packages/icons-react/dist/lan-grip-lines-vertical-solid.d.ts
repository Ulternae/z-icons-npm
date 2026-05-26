import React from 'react';

export interface LanGripLinesVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLinesVerticalSolid: React.FC<LanGripLinesVerticalSolidProps>;
export default LanGripLinesVerticalSolid;
