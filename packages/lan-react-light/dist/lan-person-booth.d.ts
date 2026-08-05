import React from 'react';

export interface LanPersonBoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBooth(props: LanPersonBoothProps): React.ReactElement;
export default LanPersonBooth;
