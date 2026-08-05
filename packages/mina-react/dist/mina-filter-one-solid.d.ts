import React from 'react';

export interface MinaFilterOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilterOneSolid(props: MinaFilterOneSolidProps): React.ReactElement;
export default MinaFilterOneSolid;
