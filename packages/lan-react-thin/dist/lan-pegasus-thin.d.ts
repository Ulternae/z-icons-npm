import React from 'react';

export interface LanPegasusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPegasusThin(props: LanPegasusThinProps): React.ReactElement;
export default LanPegasusThin;
