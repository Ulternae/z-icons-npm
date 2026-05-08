import React from 'react';

export interface MinaMessageReplySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMessageReplySolid: React.FC<MinaMessageReplySolidProps>;
export default MinaMessageReplySolid;
