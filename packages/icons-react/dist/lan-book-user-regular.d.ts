import React from 'react';

export interface LanBookUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookUserRegular: React.FC<LanBookUserRegularProps>;
export default LanBookUserRegular;
