import React from 'react';

export interface CoreGaugeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGaugeLowSolid(props: CoreGaugeLowSolidProps): React.ReactElement;
export default CoreGaugeLowSolid;
