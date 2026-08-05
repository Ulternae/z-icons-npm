import React from 'react';

export interface LanFileAudioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAudioThin(props: LanFileAudioThinProps): React.ReactElement;
export default LanFileAudioThin;
