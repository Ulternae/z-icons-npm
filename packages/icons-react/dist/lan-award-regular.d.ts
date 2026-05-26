import React from 'react';

export interface LanAwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAwardRegular: React.FC<LanAwardRegularProps>;
export default LanAwardRegular;
