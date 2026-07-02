import React from 'react';

export interface CoreStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStopSolid(props: CoreStopSolidProps): React.ReactElement;
export default CoreStopSolid;
