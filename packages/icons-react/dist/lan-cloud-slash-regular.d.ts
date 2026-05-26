import React from 'react';

export interface LanCloudSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSlashRegular: React.FC<LanCloudSlashRegularProps>;
export default LanCloudSlashRegular;
