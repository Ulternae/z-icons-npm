import React from 'react';

export interface CoreListOlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreListOlSolid(props: CoreListOlSolidProps): React.ReactElement;
export default CoreListOlSolid;
