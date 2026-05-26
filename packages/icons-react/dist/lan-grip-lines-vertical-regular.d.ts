import React from 'react';

export interface LanGripLinesVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLinesVerticalRegular: React.FC<LanGripLinesVerticalRegularProps>;
export default LanGripLinesVerticalRegular;
