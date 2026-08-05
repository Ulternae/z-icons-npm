import React from 'react';

export interface LanPlaneSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneSlashSolid(props: LanPlaneSlashSolidProps): React.ReactElement;
export default LanPlaneSlashSolid;
