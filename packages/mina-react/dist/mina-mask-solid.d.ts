import React from 'react';

export interface MinaMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMaskSolid(props: MinaMaskSolidProps): React.ReactElement;
export default MinaMaskSolid;
