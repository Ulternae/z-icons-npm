import React from 'react';

export interface MinaBankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBankSolid(props: MinaBankSolidProps): React.ReactElement;
export default MinaBankSolid;
