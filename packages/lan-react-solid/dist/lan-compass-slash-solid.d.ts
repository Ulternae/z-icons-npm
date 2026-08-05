import React from 'react';

export interface LanCompassSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassSlashSolid(props: LanCompassSlashSolidProps): React.ReactElement;
export default LanCompassSlashSolid;
