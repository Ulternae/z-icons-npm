import React from 'react';

export interface LanMidiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMidiSolid(props: LanMidiSolidProps): React.ReactElement;
export default LanMidiSolid;
