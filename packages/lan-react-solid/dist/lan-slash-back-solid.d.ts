import React from 'react';

export interface LanSlashBackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlashBackSolid(props: LanSlashBackSolidProps): React.ReactElement;
export default LanSlashBackSolid;
