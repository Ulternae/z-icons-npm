import React from 'react';

export interface LanPhoneWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneWaveformSolid(props: LanPhoneWaveformSolidProps): React.ReactElement;
export default LanPhoneWaveformSolid;
