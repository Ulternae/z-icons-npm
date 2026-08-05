import React from 'react';

export interface LanCloudSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSlashRegular(props: LanCloudSlashRegularProps): React.ReactElement;
export default LanCloudSlashRegular;
