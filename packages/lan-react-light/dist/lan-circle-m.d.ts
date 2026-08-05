import React from 'react';

export interface LanCircleMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleM(props: LanCircleMProps): React.ReactElement;
export default LanCircleM;
