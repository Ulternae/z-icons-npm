import React from 'react';

export interface MinaRewindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindSolid(props: MinaRewindSolidProps): React.ReactElement;
export default MinaRewindSolid;
