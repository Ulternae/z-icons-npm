import React from 'react';

export interface LanBaseballBatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBat(props: LanBaseballBatProps): React.ReactElement;
export default LanBaseballBat;
