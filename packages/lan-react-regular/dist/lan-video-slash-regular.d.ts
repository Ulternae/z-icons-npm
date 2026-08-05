import React from 'react';

export interface LanVideoSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoSlashRegular(props: LanVideoSlashRegularProps): React.ReactElement;
export default LanVideoSlashRegular;
