import React from 'react';

export interface CoreBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBugSolid(props: CoreBugSolidProps): React.ReactElement;
export default CoreBugSolid;
