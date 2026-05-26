import React from 'react';

export interface LanSignalStreamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalStreamRegular: React.FC<LanSignalStreamRegularProps>;
export default LanSignalStreamRegular;
