import React from 'react';

export interface MinaDislikeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDislikeSolid(props: MinaDislikeSolidProps): React.ReactElement;
export default MinaDislikeSolid;
