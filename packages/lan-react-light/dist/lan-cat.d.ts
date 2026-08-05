import React from 'react';

export interface LanCatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCat(props: LanCatProps): React.ReactElement;
export default LanCat;
