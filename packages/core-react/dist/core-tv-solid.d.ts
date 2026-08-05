import React from 'react';

export interface CoreTvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTvSolid(props: CoreTvSolidProps): React.ReactElement;
export default CoreTvSolid;
