import React from 'react';

export interface CorePaintbrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaintbrush(props: CorePaintbrushProps): React.ReactElement;
export default CorePaintbrush;
