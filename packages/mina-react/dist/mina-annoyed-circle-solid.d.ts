import React from 'react';

export interface MinaAnnoyedCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnnoyedCircleSolid(props: MinaAnnoyedCircleSolidProps): React.ReactElement;
export default MinaAnnoyedCircleSolid;
