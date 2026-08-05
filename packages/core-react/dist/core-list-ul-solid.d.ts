import React from 'react';

export interface CoreListUlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreListUlSolid(props: CoreListUlSolidProps): React.ReactElement;
export default CoreListUlSolid;
