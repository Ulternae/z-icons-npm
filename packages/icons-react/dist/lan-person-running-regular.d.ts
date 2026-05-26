import React from 'react';

export interface LanPersonRunningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRunningRegular: React.FC<LanPersonRunningRegularProps>;
export default LanPersonRunningRegular;
