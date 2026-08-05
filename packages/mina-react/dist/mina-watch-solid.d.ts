import React from 'react';

export interface MinaWatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWatchSolid(props: MinaWatchSolidProps): React.ReactElement;
export default MinaWatchSolid;
