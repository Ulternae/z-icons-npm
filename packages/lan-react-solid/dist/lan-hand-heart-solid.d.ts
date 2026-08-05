import React from 'react';

export interface LanHandHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHeartSolid(props: LanHandHeartSolidProps): React.ReactElement;
export default LanHandHeartSolid;
