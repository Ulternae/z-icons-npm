import React from 'react';

export interface LanMidiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMidiThin(props: LanMidiThinProps): React.ReactElement;
export default LanMidiThin;
