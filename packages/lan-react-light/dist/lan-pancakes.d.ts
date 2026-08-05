import React from 'react';

export interface LanPancakesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPancakes(props: LanPancakesProps): React.ReactElement;
export default LanPancakes;
