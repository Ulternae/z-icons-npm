import React from 'react';

export interface MinaBellSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellSlashSolid(props: MinaBellSlashSolidProps): React.ReactElement;
export default MinaBellSlashSolid;
