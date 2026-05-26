import React from 'react';

export interface LanPlaneUpSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneUpSlashThin: React.FC<LanPlaneUpSlashThinProps>;
export default LanPlaneUpSlashThin;
