import React from 'react';

export interface LanCutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCutSolid(props: LanCutSolidProps): React.ReactElement;
export default LanCutSolid;
