import React from 'react';

export interface CoreStrikethroughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStrikethroughSolid(props: CoreStrikethroughSolidProps): React.ReactElement;
export default CoreStrikethroughSolid;
