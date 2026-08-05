import React from 'react';

export interface LanWaveformPathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveformPathSolid(props: LanWaveformPathSolidProps): React.ReactElement;
export default LanWaveformPathSolid;
