import React from 'react';

export interface LanFileVectorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVectorSolid(props: LanFileVectorSolidProps): React.ReactElement;
export default LanFileVectorSolid;
