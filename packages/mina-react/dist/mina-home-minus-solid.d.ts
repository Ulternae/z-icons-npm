import React from 'react';

export interface MinaHomeMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeMinusSolid(props: MinaHomeMinusSolidProps): React.ReactElement;
export default MinaHomeMinusSolid;
