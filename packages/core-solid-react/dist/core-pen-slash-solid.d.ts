import React from 'react';

export interface CorePenSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenSlashSolid(props: CorePenSlashSolidProps): React.ReactElement;
export default CorePenSlashSolid;
