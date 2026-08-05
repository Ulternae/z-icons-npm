import React from 'react';

export interface LanRabbitFastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRabbitFastSolid(props: LanRabbitFastSolidProps): React.ReactElement;
export default LanRabbitFastSolid;
