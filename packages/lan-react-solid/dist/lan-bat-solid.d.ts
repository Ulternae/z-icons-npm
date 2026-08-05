import React from 'react';

export interface LanBatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatSolid(props: LanBatSolidProps): React.ReactElement;
export default LanBatSolid;
