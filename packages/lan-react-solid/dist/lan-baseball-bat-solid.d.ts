import React from 'react';

export interface LanBaseballBatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBatSolid(props: LanBaseballBatSolidProps): React.ReactElement;
export default LanBaseballBatSolid;
