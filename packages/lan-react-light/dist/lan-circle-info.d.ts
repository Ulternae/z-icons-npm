import React from 'react';

export interface LanCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleInfo(props: LanCircleInfoProps): React.ReactElement;
export default LanCircleInfo;
