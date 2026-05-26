import React from 'react';

export interface LanUtensilsSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilsSlash: React.FC<LanUtensilsSlashProps>;
export default LanUtensilsSlash;
