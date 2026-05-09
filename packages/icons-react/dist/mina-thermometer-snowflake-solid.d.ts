import React from 'react';

export interface MinaThermometerSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThermometerSnowflakeSolid: React.FC<MinaThermometerSnowflakeSolidProps>;
export default MinaThermometerSnowflakeSolid;
