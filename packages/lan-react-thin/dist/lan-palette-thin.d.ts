import React from 'react';

export interface LanPaletteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaletteThin(props: LanPaletteThinProps): React.ReactElement;
export default LanPaletteThin;
