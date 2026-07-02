import React from 'react';

export interface CoreWheelchairMoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWheelchairMoveSolid(props: CoreWheelchairMoveSolidProps): React.ReactElement;
export default CoreWheelchairMoveSolid;
