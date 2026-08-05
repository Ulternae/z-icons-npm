import React from 'react';

export interface MinaDiceFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceFiveSolid(props: MinaDiceFiveSolidProps): React.ReactElement;
export default MinaDiceFiveSolid;
