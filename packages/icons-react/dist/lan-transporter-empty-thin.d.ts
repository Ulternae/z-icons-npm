import React from 'react';

export interface LanTransporterEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporterEmptyThin: React.FC<LanTransporterEmptyThinProps>;
export default LanTransporterEmptyThin;
