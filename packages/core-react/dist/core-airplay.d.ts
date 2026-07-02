import React from 'react';

export interface CoreAirplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAirplay(props: CoreAirplayProps): React.ReactElement;
export default CoreAirplay;
