import React from 'react';

export interface LanLeafOakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafOakSolid(props: LanLeafOakSolidProps): React.ReactElement;
export default LanLeafOakSolid;
