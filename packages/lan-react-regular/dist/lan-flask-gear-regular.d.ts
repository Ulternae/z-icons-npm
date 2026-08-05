import React from 'react';

export interface LanFlaskGearRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskGearRegular(props: LanFlaskGearRegularProps): React.ReactElement;
export default LanFlaskGearRegular;
