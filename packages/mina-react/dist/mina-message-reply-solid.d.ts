import React from 'react';

export interface MinaMessageReplySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageReplySolid(props: MinaMessageReplySolidProps): React.ReactElement;
export default MinaMessageReplySolid;
