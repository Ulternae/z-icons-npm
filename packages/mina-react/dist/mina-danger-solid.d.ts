import React from 'react';

export interface MinaDangerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerSolid(props: MinaDangerSolidProps): React.ReactElement;
export default MinaDangerSolid;
