import React from 'react';

export interface LanTaxiBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaxiBus(props: LanTaxiBusProps): React.ReactElement;
export default LanTaxiBus;
