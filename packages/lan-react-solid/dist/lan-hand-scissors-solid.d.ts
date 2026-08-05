import React from 'react';

export interface LanHandScissorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandScissorsSolid(props: LanHandScissorsSolidProps): React.ReactElement;
export default LanHandScissorsSolid;
