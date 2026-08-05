import React from 'react';

export interface LanBaseballBatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBatRegular(props: LanBaseballBatRegularProps): React.ReactElement;
export default LanBaseballBatRegular;
