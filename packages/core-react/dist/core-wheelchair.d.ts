import React from 'react';

export interface CoreWheelchairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWheelchair(props: CoreWheelchairProps): React.ReactElement;
export default CoreWheelchair;
