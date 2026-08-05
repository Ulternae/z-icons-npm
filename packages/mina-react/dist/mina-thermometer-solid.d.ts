import React from 'react';

export interface MinaThermometerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThermometerSolid(props: MinaThermometerSolidProps): React.ReactElement;
export default MinaThermometerSolid;
