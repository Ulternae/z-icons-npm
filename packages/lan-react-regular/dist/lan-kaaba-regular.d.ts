import React from 'react';

export interface LanKaabaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKaabaRegular(props: LanKaabaRegularProps): React.ReactElement;
export default LanKaabaRegular;
