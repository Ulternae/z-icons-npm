import React from 'react';

export interface LanTransporterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporterSolid(props: LanTransporterSolidProps): React.ReactElement;
export default LanTransporterSolid;
