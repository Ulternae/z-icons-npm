import React from 'react';

export interface LanPianoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPianoThin(props: LanPianoThinProps): React.ReactElement;
export default LanPianoThin;
