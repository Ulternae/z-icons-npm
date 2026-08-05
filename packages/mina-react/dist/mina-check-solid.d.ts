import React from 'react';

export interface MinaCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckSolid(props: MinaCheckSolidProps): React.ReactElement;
export default MinaCheckSolid;
