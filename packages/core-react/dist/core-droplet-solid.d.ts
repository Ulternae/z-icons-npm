import React from 'react';

export interface CoreDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDropletSolid(props: CoreDropletSolidProps): React.ReactElement;
export default CoreDropletSolid;
