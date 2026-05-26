import React from 'react';

export interface LanMidiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMidiThin: React.FC<LanMidiThinProps>;
export default LanMidiThin;
