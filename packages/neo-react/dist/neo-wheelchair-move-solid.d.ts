import React from 'react';

export interface NeoWheelchairMoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWheelchairMoveSolid(props: NeoWheelchairMoveSolidProps): React.ReactElement;
export default NeoWheelchairMoveSolid;
