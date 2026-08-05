import React from 'react';

export interface LanPumpImpellerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpImpellerThin(props: LanPumpImpellerThinProps): React.ReactElement;
export default LanPumpImpellerThin;
