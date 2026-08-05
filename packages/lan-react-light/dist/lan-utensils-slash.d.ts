import React from 'react';

export interface LanUtensilsSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtensilsSlash(props: LanUtensilsSlashProps): React.ReactElement;
export default LanUtensilsSlash;
