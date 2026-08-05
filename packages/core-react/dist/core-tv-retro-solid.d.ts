import React from 'react';

export interface CoreTvRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTvRetroSolid(props: CoreTvRetroSolidProps): React.ReactElement;
export default CoreTvRetroSolid;
