import React from 'react';

export interface CorePencilLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePencilLineSolid(props: CorePencilLineSolidProps): React.ReactElement;
export default CorePencilLineSolid;
