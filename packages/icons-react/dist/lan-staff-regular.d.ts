import React from 'react';

export interface LanStaffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStaffRegular: React.FC<LanStaffRegularProps>;
export default LanStaffRegular;
