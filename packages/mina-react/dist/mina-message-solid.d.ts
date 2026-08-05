import React from 'react';

export interface MinaMessageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageSolid(props: MinaMessageSolidProps): React.ReactElement;
export default MinaMessageSolid;
