import React from 'react';

export interface LanTransporterEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporterEmpty: React.FC<LanTransporterEmptyProps>;
export default LanTransporterEmpty;
