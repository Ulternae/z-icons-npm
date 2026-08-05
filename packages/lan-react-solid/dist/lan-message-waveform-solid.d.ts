import React from 'react';

export interface LanMessageWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageWaveformSolid(props: LanMessageWaveformSolidProps): React.ReactElement;
export default LanMessageWaveformSolid;
