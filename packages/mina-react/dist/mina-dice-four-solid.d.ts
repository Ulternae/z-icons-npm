import React from 'react';

export interface MinaDiceFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceFourSolid(props: MinaDiceFourSolidProps): React.ReactElement;
export default MinaDiceFourSolid;
