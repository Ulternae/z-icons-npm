import React from 'react';

export interface LanAlignSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignSlash: React.FC<LanAlignSlashProps>;
export default LanAlignSlash;
