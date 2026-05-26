import React from 'react';

export interface LanTrashSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashSlashThin: React.FC<LanTrashSlashThinProps>;
export default LanTrashSlashThin;
