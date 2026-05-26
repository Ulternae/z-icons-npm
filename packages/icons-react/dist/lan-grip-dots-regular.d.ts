import React from 'react';

export interface LanGripDotsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripDotsRegular: React.FC<LanGripDotsRegularProps>;
export default LanGripDotsRegular;
