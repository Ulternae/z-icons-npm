import React from 'react';

export interface CoreFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilterSolid(props: CoreFilterSolidProps): React.ReactElement;
export default CoreFilterSolid;
