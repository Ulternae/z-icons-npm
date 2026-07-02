import React from 'react';

export interface CorePauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePauseSolid(props: CorePauseSolidProps): React.ReactElement;
export default CorePauseSolid;
