import React from 'react';

export interface LanDoNotEnterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoNotEnterRegular: React.FC<LanDoNotEnterRegularProps>;
export default LanDoNotEnterRegular;
