import React from 'react';

export interface LanSlashBackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashBackRegular: React.FC<LanSlashBackRegularProps>;
export default LanSlashBackRegular;
