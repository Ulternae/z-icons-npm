import React from 'react';

export interface LanPenSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSlashRegular(props: LanPenSlashRegularProps): React.ReactElement;
export default LanPenSlashRegular;
