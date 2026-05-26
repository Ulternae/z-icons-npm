import React from 'react';

export interface LanForwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForwardRegular: React.FC<LanForwardRegularProps>;
export default LanForwardRegular;
