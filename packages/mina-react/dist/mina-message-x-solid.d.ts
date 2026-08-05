import React from 'react';

export interface MinaMessageXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageXSolid(props: MinaMessageXSolidProps): React.ReactElement;
export default MinaMessageXSolid;
