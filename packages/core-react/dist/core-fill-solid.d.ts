import React from 'react';

export interface CoreFillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFillSolid(props: CoreFillSolidProps): React.ReactElement;
export default CoreFillSolid;
