import React from 'react';

export interface LanWaveTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveTriangle(props: LanWaveTriangleProps): React.ReactElement;
export default LanWaveTriangle;
