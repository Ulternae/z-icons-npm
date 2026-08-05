import React from 'react';

export interface LanSpeakersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeakersRegular(props: LanSpeakersRegularProps): React.ReactElement;
export default LanSpeakersRegular;
