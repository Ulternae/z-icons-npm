import React from 'react';

export interface MinaThermometerSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThermometerSnowflakeSolid(props: MinaThermometerSnowflakeSolidProps): React.ReactElement;
export default MinaThermometerSnowflakeSolid;
