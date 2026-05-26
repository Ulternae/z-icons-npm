import React from 'react';

export interface LanGripLinesVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLinesVerticalThin: React.FC<LanGripLinesVerticalThinProps>;
export default LanGripLinesVerticalThin;
