import React from 'react';

export interface LanFileAudioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAudio(props: LanFileAudioProps): React.ReactElement;
export default LanFileAudio;
