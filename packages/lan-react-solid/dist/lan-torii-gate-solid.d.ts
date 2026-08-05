import React from 'react';

export interface LanToriiGateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToriiGateSolid(props: LanToriiGateSolidProps): React.ReactElement;
export default LanToriiGateSolid;
