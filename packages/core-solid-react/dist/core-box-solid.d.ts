import React from 'react';

export interface CoreBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoxSolid(props: CoreBoxSolidProps): React.ReactElement;
export default CoreBoxSolid;
