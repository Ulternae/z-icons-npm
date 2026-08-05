import React from 'react';

export interface LanImageSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageSlashRegular(props: LanImageSlashRegularProps): React.ReactElement;
export default LanImageSlashRegular;
