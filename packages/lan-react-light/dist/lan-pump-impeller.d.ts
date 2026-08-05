import React from 'react';

export interface LanPumpImpellerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpImpeller(props: LanPumpImpellerProps): React.ReactElement;
export default LanPumpImpeller;
