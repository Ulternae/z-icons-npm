import React from 'react';

export interface LanPlaneSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneSlashThin: React.FC<LanPlaneSlashThinProps>;
export default LanPlaneSlashThin;
