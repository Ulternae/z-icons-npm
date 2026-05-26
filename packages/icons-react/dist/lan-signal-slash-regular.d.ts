import React from 'react';

export interface LanSignalSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalSlashRegular: React.FC<LanSignalSlashRegularProps>;
export default LanSignalSlashRegular;
