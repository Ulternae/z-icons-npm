import React from 'react';

export interface LanTaxiBusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaxiBusThin(props: LanTaxiBusThinProps): React.ReactElement;
export default LanTaxiBusThin;
