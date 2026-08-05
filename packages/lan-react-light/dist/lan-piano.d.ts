import React from 'react';

export interface LanPianoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiano(props: LanPianoProps): React.ReactElement;
export default LanPiano;
