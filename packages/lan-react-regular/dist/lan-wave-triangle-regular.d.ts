import React from 'react';

export interface LanWaveTriangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveTriangleRegular(props: LanWaveTriangleRegularProps): React.ReactElement;
export default LanWaveTriangleRegular;
