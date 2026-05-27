import React from 'react';

export interface NeoWheelchairMoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWheelchairMoveSolid: React.FC<NeoWheelchairMoveSolidProps>;
export default NeoWheelchairMoveSolid;
