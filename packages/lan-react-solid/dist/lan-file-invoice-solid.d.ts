import React from 'react';

export interface LanFileInvoiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileInvoiceSolid(props: LanFileInvoiceSolidProps): React.ReactElement;
export default LanFileInvoiceSolid;
