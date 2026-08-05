import React from 'react';

export interface MinaDiceTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceTwoSolid(props: MinaDiceTwoSolidProps): React.ReactElement;
export default MinaDiceTwoSolid;
