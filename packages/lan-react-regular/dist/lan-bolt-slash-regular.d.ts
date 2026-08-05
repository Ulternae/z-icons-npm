import React from 'react';

export interface LanBoltSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltSlashRegular(props: LanBoltSlashRegularProps): React.ReactElement;
export default LanBoltSlashRegular;
