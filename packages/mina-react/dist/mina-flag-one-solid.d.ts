import React from 'react';

export interface MinaFlagOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlagOneSolid(props: MinaFlagOneSolidProps): React.ReactElement;
export default MinaFlagOneSolid;
