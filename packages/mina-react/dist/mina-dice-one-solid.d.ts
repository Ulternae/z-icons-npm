import React from 'react';

export interface MinaDiceOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceOneSolid(props: MinaDiceOneSolidProps): React.ReactElement;
export default MinaDiceOneSolid;
