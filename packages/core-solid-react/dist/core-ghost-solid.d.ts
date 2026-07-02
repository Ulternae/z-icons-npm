import React from 'react';

export interface CoreGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGhostSolid(props: CoreGhostSolidProps): React.ReactElement;
export default CoreGhostSolid;
