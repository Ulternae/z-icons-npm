import React from 'react';

export interface LanAwardSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAwardSimpleRegular: React.FC<LanAwardSimpleRegularProps>;
export default LanAwardSimpleRegular;
