import React from 'react';

export interface LanFileAudioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAudioRegular(props: LanFileAudioRegularProps): React.ReactElement;
export default LanFileAudioRegular;
