import React from 'react';

export interface MinaCheckCircleOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckCircleOneSolid(props: MinaCheckCircleOneSolidProps): React.ReactElement;
export default MinaCheckCircleOneSolid;
