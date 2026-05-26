import React from 'react';

export interface LanPlaneSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneSlashRegular: React.FC<LanPlaneSlashRegularProps>;
export default LanPlaneSlashRegular;
