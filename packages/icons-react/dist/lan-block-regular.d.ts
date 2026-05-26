import React from 'react';

export interface LanBlockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockRegular: React.FC<LanBlockRegularProps>;
export default LanBlockRegular;
