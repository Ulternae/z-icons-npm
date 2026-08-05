import React from 'react';

export interface LanLinkSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSlashSolid(props: LanLinkSlashSolidProps): React.ReactElement;
export default LanLinkSlashSolid;
