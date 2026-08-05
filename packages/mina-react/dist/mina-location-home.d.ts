import React from 'react';

export interface MinaLocationHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationHome(props: MinaLocationHomeProps): React.ReactElement;
export default MinaLocationHome;
