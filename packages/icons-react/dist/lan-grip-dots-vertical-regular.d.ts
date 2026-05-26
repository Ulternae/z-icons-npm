import React from 'react';

export interface LanGripDotsVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripDotsVerticalRegular: React.FC<LanGripDotsVerticalRegularProps>;
export default LanGripDotsVerticalRegular;
