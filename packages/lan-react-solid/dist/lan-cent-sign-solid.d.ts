import React from 'react';

export interface LanCentSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCentSignSolid(props: LanCentSignSolidProps): React.ReactElement;
export default LanCentSignSolid;
