import React from 'react';

export interface LanMidiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMidi: React.FC<LanMidiProps>;
export default LanMidi;
