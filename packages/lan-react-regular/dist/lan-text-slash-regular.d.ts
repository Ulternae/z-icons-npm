import React from 'react';

export interface LanTextSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSlashRegular(props: LanTextSlashRegularProps): React.ReactElement;
export default LanTextSlashRegular;
