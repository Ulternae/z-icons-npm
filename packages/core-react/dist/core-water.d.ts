import React from 'react';

export interface CoreWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWater(props: CoreWaterProps): React.ReactElement;
export default CoreWater;
