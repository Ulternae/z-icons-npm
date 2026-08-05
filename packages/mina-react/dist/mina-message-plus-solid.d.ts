import React from 'react';

export interface MinaMessagePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessagePlusSolid(props: MinaMessagePlusSolidProps): React.ReactElement;
export default MinaMessagePlusSolid;
