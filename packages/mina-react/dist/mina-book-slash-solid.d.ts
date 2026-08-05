import React from 'react';

export interface MinaBookSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookSlashSolid(props: MinaBookSlashSolidProps): React.ReactElement;
export default MinaBookSlashSolid;
