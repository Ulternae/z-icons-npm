import React from 'react';

export interface LanTrashSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashSlash: React.FC<LanTrashSlashProps>;
export default LanTrashSlash;
