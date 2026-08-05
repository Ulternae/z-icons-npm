import React from 'react';

export interface MinaIndifferentGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIndifferentGhostSolid(props: MinaIndifferentGhostSolidProps): React.ReactElement;
export default MinaIndifferentGhostSolid;
