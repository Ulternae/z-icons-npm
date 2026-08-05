import React from 'react';

export interface CoreBugSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBugSlashSolid(props: CoreBugSlashSolidProps): React.ReactElement;
export default CoreBugSlashSolid;
