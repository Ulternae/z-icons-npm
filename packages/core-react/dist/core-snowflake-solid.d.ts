import React from 'react';

export interface CoreSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSnowflakeSolid(props: CoreSnowflakeSolidProps): React.ReactElement;
export default CoreSnowflakeSolid;
