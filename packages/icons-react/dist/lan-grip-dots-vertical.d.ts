import React from 'react';

export interface LanGripDotsVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripDotsVertical: React.FC<LanGripDotsVerticalProps>;
export default LanGripDotsVertical;
