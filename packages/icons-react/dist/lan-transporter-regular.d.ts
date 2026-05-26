import React from 'react';

export interface LanTransporterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporterRegular: React.FC<LanTransporterRegularProps>;
export default LanTransporterRegular;
