import React from 'react';

export interface MinaBellCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellCheckSolid(props: MinaBellCheckSolidProps): React.ReactElement;
export default MinaBellCheckSolid;
