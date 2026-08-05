import React from 'react';

export interface LanFileAudioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAudioSolid(props: LanFileAudioSolidProps): React.ReactElement;
export default LanFileAudioSolid;
