import React from 'react';

export interface LanHeaderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeaderSolid(props: LanHeaderSolidProps): React.ReactElement;
export default LanHeaderSolid;
