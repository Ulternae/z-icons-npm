import React from 'react';

export interface MinaCheckCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckCircleSolid(props: MinaCheckCircleSolidProps): React.ReactElement;
export default MinaCheckCircleSolid;
