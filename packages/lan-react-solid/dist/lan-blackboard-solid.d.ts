import React from 'react';

export interface LanBlackboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlackboardSolid(props: LanBlackboardSolidProps): React.ReactElement;
export default LanBlackboardSolid;
