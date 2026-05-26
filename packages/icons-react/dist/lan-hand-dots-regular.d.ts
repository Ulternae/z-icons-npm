import React from 'react';

export interface LanHandDotsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandDotsRegular: React.FC<LanHandDotsRegularProps>;
export default LanHandDotsRegular;
