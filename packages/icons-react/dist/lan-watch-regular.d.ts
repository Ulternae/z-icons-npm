import React from 'react';

export interface LanWatchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchRegular: React.FC<LanWatchRegularProps>;
export default LanWatchRegular;
