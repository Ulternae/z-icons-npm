import React from 'react';

export interface LanNfcSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSlashRegular(props: LanNfcSlashRegularProps): React.ReactElement;
export default LanNfcSlashRegular;
