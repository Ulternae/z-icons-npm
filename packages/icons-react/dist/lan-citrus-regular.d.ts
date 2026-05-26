import React from 'react';

export interface LanCitrusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrusRegular: React.FC<LanCitrusRegularProps>;
export default LanCitrusRegular;
