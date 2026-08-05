import React from 'react';

export interface MinaDoorOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDoorOpenSolid(props: MinaDoorOpenSolidProps): React.ReactElement;
export default MinaDoorOpenSolid;
