import React from 'react';

export interface LanLighthouseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLighthouseRegular: React.FC<LanLighthouseRegularProps>;
export default LanLighthouseRegular;
