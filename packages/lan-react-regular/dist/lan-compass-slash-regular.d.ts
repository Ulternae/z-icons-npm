import React from 'react';

export interface LanCompassSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassSlashRegular(props: LanCompassSlashRegularProps): React.ReactElement;
export default LanCompassSlashRegular;
