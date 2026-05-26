import React from 'react';

export interface LanUserSithRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserSithRegular: React.FC<LanUserSithRegularProps>;
export default LanUserSithRegular;
