import React from 'react';

export interface LanLinkSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSlashRegular(props: LanLinkSlashRegularProps): React.ReactElement;
export default LanLinkSlashRegular;
