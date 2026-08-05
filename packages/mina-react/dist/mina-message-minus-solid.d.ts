import React from 'react';

export interface MinaMessageMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageMinusSolid(props: MinaMessageMinusSolidProps): React.ReactElement;
export default MinaMessageMinusSolid;
