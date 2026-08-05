import React from 'react';

export interface LanTaxiBusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaxiBusRegular(props: LanTaxiBusRegularProps): React.ReactElement;
export default LanTaxiBusRegular;
