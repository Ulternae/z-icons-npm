import React from 'react';

export interface LanMessageHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageHeartSolid(props: LanMessageHeartSolidProps): React.ReactElement;
export default LanMessageHeartSolid;
