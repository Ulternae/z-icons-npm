import React from 'react';

export interface CorePenLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenLineSolid(props: CorePenLineSolidProps): React.ReactElement;
export default CorePenLineSolid;
