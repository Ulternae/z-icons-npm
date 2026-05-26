import React from 'react';

export interface LanCouchSmallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCouchSmallRegular: React.FC<LanCouchSmallRegularProps>;
export default LanCouchSmallRegular;
