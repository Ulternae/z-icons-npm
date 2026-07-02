import React from 'react';

export interface CorePencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePencil(props: CorePencilProps): React.ReactElement;
export default CorePencil;
