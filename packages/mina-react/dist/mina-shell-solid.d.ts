import React from 'react';

export interface MinaShellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShellSolid(props: MinaShellSolidProps): React.ReactElement;
export default MinaShellSolid;
