import React from 'react';

export interface LanSpeakersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeakers: React.FC<LanSpeakersProps>;
export default LanSpeakers;
