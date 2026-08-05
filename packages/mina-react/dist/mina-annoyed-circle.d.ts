import React from 'react';

export interface MinaAnnoyedCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnnoyedCircle(props: MinaAnnoyedCircleProps): React.ReactElement;
export default MinaAnnoyedCircle;
