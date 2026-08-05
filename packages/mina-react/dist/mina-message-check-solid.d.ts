import React from 'react';

export interface MinaMessageCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageCheckSolid(props: MinaMessageCheckSolidProps): React.ReactElement;
export default MinaMessageCheckSolid;
