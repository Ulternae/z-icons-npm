import React from 'react';

export interface MinaThermometerSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThermometerSunSolid(props: MinaThermometerSunSolidProps): React.ReactElement;
export default MinaThermometerSunSolid;
