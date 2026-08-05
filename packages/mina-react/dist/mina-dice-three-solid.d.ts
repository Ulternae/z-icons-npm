import React from 'react';

export interface MinaDiceThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceThreeSolid(props: MinaDiceThreeSolidProps): React.ReactElement;
export default MinaDiceThreeSolid;
