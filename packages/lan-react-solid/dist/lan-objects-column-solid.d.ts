import React from 'react';

export interface LanObjectsColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsColumnSolid(props: LanObjectsColumnSolidProps): React.ReactElement;
export default LanObjectsColumnSolid;
