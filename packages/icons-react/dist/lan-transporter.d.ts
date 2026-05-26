import React from 'react';

export interface LanTransporterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter: React.FC<LanTransporterProps>;
export default LanTransporter;
