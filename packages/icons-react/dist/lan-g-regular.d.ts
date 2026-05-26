import React from 'react';

export interface LanGRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGRegular: React.FC<LanGRegularProps>;
export default LanGRegular;
