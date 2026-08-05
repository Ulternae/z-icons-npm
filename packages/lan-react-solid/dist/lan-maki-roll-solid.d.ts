import React from 'react';

export interface LanMakiRollSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMakiRollSolid(props: LanMakiRollSolidProps): React.ReactElement;
export default LanMakiRollSolid;
