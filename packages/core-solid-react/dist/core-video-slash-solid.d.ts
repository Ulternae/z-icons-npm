import React from 'react';

export interface CoreVideoSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVideoSlashSolid(props: CoreVideoSlashSolidProps): React.ReactElement;
export default CoreVideoSlashSolid;
