import React from 'react';

export interface LanKiteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiteSolid(props: LanKiteSolidProps): React.ReactElement;
export default LanKiteSolid;
