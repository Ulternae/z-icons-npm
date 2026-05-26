import React from 'react';

export interface LanDatabaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDatabaseRegular: React.FC<LanDatabaseRegularProps>;
export default LanDatabaseRegular;
