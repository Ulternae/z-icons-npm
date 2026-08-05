import React from 'react';

export interface LanCloudSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSlashSolid(props: LanCloudSlashSolidProps): React.ReactElement;
export default LanCloudSlashSolid;
