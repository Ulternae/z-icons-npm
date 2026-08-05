import React from 'react';

export interface LanMobileSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileSignalSolid(props: LanMobileSignalSolidProps): React.ReactElement;
export default LanMobileSignalSolid;
