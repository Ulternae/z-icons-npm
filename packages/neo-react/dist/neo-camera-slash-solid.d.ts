import React from 'react';

export interface NeoCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCameraSlashSolid(props: NeoCameraSlashSolidProps): React.ReactElement;
export default NeoCameraSlashSolid;
