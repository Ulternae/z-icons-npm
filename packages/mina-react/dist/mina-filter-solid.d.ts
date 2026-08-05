import React from 'react';

export interface MinaFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilterSolid(props: MinaFilterSolidProps): React.ReactElement;
export default MinaFilterSolid;
