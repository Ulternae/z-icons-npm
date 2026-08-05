import React from 'react';

export interface LanSpeakerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeakerRegular(props: LanSpeakerRegularProps): React.ReactElement;
export default LanSpeakerRegular;
