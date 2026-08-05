import React from 'react';

export interface CoreBoltSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoltSlashSolid(props: CoreBoltSlashSolidProps): React.ReactElement;
export default CoreBoltSlashSolid;
