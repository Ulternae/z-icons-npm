import React from 'react';

export interface LanTransporterEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporterEmptyRegular: React.FC<LanTransporterEmptyRegularProps>;
export default LanTransporterEmptyRegular;
