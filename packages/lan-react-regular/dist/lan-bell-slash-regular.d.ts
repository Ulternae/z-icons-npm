import React from 'react';

export interface LanBellSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSlashRegular(props: LanBellSlashRegularProps): React.ReactElement;
export default LanBellSlashRegular;
