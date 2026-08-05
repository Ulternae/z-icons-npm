import React from 'react';

export interface LanBridgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeSolid(props: LanBridgeSolidProps): React.ReactElement;
export default LanBridgeSolid;
