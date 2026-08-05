import React from 'react';

export interface LanMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMSolid(props: LanMSolidProps): React.ReactElement;
export default LanMSolid;
