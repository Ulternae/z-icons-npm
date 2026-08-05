import React from 'react';

export interface LanCheckCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckCircleSolid(props: LanCheckCircleSolidProps): React.ReactElement;
export default LanCheckCircleSolid;
