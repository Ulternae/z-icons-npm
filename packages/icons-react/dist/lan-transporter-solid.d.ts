import React from 'react';

export interface LanTransporterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporterSolid: React.FC<LanTransporterSolidProps>;
export default LanTransporterSolid;
