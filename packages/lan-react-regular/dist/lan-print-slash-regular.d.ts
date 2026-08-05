import React from 'react';

export interface LanPrintSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintSlashRegular(props: LanPrintSlashRegularProps): React.ReactElement;
export default LanPrintSlashRegular;
