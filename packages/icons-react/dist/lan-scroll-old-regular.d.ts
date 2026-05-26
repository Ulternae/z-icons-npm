import React from 'react';

export interface LanScrollOldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollOldRegular: React.FC<LanScrollOldRegularProps>;
export default LanScrollOldRegular;
