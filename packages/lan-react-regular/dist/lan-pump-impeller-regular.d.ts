import React from 'react';

export interface LanPumpImpellerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpImpellerRegular(props: LanPumpImpellerRegularProps): React.ReactElement;
export default LanPumpImpellerRegular;
