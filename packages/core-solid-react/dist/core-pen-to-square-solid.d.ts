import React from 'react';

export interface CorePenToSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenToSquareSolid(props: CorePenToSquareSolidProps): React.ReactElement;
export default CorePenToSquareSolid;
