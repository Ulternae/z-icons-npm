import React from 'react';

export interface LanPeachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeach(props: LanPeachProps): React.ReactElement;
export default LanPeach;
