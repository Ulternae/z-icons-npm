import React from 'react';

export interface MinaLoginSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLoginSolid(props: MinaLoginSolidProps): React.ReactElement;
export default MinaLoginSolid;
