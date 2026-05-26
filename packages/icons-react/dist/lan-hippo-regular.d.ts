import React from 'react';

export interface LanHippoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHippoRegular: React.FC<LanHippoRegularProps>;
export default LanHippoRegular;
