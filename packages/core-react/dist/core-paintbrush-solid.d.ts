import React from 'react';

export interface CorePaintbrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaintbrushSolid(props: CorePaintbrushSolidProps): React.ReactElement;
export default CorePaintbrushSolid;
