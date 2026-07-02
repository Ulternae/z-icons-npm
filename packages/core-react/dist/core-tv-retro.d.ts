import React from 'react';

export interface CoreTvRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTvRetro(props: CoreTvRetroProps): React.ReactElement;
export default CoreTvRetro;
