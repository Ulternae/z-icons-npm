import React from 'react';

export interface LanGripLinesVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLinesVertical: React.FC<LanGripLinesVerticalProps>;
export default LanGripLinesVertical;
