import React from 'react';

export interface MinaCartMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartMinusSolid(props: MinaCartMinusSolidProps): React.ReactElement;
export default MinaCartMinusSolid;
