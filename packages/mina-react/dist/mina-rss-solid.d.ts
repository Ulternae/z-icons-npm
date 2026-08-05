import React from 'react';

export interface MinaRssSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRssSolid(props: MinaRssSolidProps): React.ReactElement;
export default MinaRssSolid;
