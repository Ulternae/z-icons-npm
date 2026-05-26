import React from 'react';

export interface LanWatchSmartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchSmartRegular: React.FC<LanWatchSmartRegularProps>;
export default LanWatchSmartRegular;
