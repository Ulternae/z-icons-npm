import React from 'react';

export interface MinaCartCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartCheckSolid(props: MinaCartCheckSolidProps): React.ReactElement;
export default MinaCartCheckSolid;
