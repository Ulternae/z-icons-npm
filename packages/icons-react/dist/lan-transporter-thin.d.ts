import React from 'react';

export interface LanTransporterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporterThin: React.FC<LanTransporterThinProps>;
export default LanTransporterThin;
