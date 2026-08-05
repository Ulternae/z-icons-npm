import React from 'react';

export interface MinaWheelchairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWheelchair(props: MinaWheelchairProps): React.ReactElement;
export default MinaWheelchair;
