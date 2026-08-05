import React from 'react';

export interface LanPeanutsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanuts(props: LanPeanutsProps): React.ReactElement;
export default LanPeanuts;
