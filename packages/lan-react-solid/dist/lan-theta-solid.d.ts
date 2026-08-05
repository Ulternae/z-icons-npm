import React from 'react';

export interface LanThetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThetaSolid(props: LanThetaSolidProps): React.ReactElement;
export default LanThetaSolid;
