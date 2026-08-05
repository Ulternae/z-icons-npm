import React from 'react';

export interface LanMidiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMidi(props: LanMidiProps): React.ReactElement;
export default LanMidi;
