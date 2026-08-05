import React from 'react';

export interface LanSigmaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSigmaSolid(props: LanSigmaSolidProps): React.ReactElement;
export default LanSigmaSolid;
