import React from 'react';

export interface CoreTvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTv(props: CoreTvProps): React.ReactElement;
export default CoreTv;
