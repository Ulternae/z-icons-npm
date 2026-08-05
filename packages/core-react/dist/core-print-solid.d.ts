import React from 'react';

export interface CorePrintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePrintSolid(props: CorePrintSolidProps): React.ReactElement;
export default CorePrintSolid;
