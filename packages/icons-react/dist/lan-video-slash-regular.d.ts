import React from 'react';

export interface LanVideoSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoSlashRegular: React.FC<LanVideoSlashRegularProps>;
export default LanVideoSlashRegular;
