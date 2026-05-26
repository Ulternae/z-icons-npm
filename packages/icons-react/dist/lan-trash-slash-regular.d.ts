import React from 'react';

export interface LanTrashSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashSlashRegular: React.FC<LanTrashSlashRegularProps>;
export default LanTrashSlashRegular;
