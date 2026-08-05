import React from 'react';

export interface LanBookHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookHeartSolid(props: LanBookHeartSolidProps): React.ReactElement;
export default LanBookHeartSolid;
