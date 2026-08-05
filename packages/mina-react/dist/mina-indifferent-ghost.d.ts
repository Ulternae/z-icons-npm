import React from 'react';

export interface MinaIndifferentGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIndifferentGhost(props: MinaIndifferentGhostProps): React.ReactElement;
export default MinaIndifferentGhost;
