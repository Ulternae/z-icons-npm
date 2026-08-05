import React from 'react';

export interface LanPianoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPianoRegular(props: LanPianoRegularProps): React.ReactElement;
export default LanPianoRegular;
