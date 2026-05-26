import React from 'react';

export interface LanTeethRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeethRegular: React.FC<LanTeethRegularProps>;
export default LanTeethRegular;
