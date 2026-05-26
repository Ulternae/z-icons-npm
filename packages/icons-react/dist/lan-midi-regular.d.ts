import React from 'react';

export interface LanMidiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMidiRegular: React.FC<LanMidiRegularProps>;
export default LanMidiRegular;
