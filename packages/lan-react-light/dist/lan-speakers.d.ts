import React from 'react';

export interface LanSpeakersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeakers(props: LanSpeakersProps): React.ReactElement;
export default LanSpeakers;
