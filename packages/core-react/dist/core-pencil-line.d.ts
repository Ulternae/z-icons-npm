import React from 'react';

export interface CorePencilLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePencilLine(props: CorePencilLineProps): React.ReactElement;
export default CorePencilLine;
