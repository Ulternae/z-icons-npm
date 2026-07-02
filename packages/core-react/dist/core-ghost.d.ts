import React from 'react';

export interface CoreGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGhost(props: CoreGhostProps): React.ReactElement;
export default CoreGhost;
