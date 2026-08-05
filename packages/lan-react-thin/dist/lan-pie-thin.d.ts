import React from 'react';

export interface LanPieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPieThin(props: LanPieThinProps): React.ReactElement;
export default LanPieThin;
