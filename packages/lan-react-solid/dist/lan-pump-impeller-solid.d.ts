import React from 'react';

export interface LanPumpImpellerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpImpellerSolid(props: LanPumpImpellerSolidProps): React.ReactElement;
export default LanPumpImpellerSolid;
