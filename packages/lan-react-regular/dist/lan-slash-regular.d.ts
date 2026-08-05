import React from 'react';

export interface LanSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlashRegular(props: LanSlashRegularProps): React.ReactElement;
export default LanSlashRegular;
