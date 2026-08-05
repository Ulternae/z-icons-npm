import React from 'react';

export interface CoreBellSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBellSlashSolid(props: CoreBellSlashSolidProps): React.ReactElement;
export default CoreBellSlashSolid;
