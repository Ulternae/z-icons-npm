import React from 'react';

export interface LanEarWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarWaveformSolid(props: LanEarWaveformSolidProps): React.ReactElement;
export default LanEarWaveformSolid;
