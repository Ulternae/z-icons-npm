import React from 'react';

export interface MinaCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCameraSlashSolid(props: MinaCameraSlashSolidProps): React.ReactElement;
export default MinaCameraSlashSolid;
