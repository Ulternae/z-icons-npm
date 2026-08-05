import React from 'react';

export interface LanWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveformSolid(props: LanWaveformSolidProps): React.ReactElement;
export default LanWaveformSolid;
