import React from 'react';

export interface LanMidiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMidiSolid: React.FC<LanMidiSolidProps>;
export default LanMidiSolid;
