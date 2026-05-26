import React from 'react';

export interface LanAlignSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignSlashThin: React.FC<LanAlignSlashThinProps>;
export default LanAlignSlashThin;
