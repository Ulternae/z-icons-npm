import React from 'react';

export interface LanTableSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableSlash: React.FC<LanTableSlashProps>;
export default LanTableSlash;
