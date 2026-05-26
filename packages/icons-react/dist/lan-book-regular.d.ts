import React from 'react';

export interface LanBookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookRegular: React.FC<LanBookRegularProps>;
export default LanBookRegular;
