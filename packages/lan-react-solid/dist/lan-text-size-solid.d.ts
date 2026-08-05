import React from 'react';

export interface LanTextSizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSizeSolid(props: LanTextSizeSolidProps): React.ReactElement;
export default LanTextSizeSolid;
