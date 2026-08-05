import React from 'react';

export interface LanInputTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputTextSolid(props: LanInputTextSolidProps): React.ReactElement;
export default LanInputTextSolid;
