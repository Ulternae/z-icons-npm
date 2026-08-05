import React from 'react';

export interface LanWaveTriangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveTriangleThin(props: LanWaveTriangleThinProps): React.ReactElement;
export default LanWaveTriangleThin;
