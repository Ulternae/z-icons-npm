import React from 'react';

export interface LanTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSolid(props: LanTextSolidProps): React.ReactElement;
export default LanTextSolid;
