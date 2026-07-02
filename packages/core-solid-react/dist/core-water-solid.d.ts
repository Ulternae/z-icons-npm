import React from 'react';

export interface CoreWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWaterSolid(props: CoreWaterSolidProps): React.ReactElement;
export default CoreWaterSolid;
