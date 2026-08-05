import React from 'react';

export interface MinaRefreshSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRefreshSolid(props: MinaRefreshSolidProps): React.ReactElement;
export default MinaRefreshSolid;
