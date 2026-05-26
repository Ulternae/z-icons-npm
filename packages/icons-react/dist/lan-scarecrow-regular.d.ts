import React from 'react';

export interface LanScarecrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarecrowRegular: React.FC<LanScarecrowRegularProps>;
export default LanScarecrowRegular;
