import React from 'react';

export interface MinaHeartSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartSlashSolid(props: MinaHeartSlashSolidProps): React.ReactElement;
export default MinaHeartSlashSolid;
