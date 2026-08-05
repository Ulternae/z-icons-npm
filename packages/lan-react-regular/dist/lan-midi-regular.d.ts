import React from 'react';

export interface LanMidiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMidiRegular(props: LanMidiRegularProps): React.ReactElement;
export default LanMidiRegular;
