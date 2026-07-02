import React from 'react';

export interface CoreNotdefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreNotdefSolid(props: CoreNotdefSolidProps): React.ReactElement;
export default CoreNotdefSolid;
