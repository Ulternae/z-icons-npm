import React from 'react';

export interface CorePenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePen(props: CorePenProps): React.ReactElement;
export default CorePen;
