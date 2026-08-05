import React from 'react';

export interface LanFlaskGearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskGearThin(props: LanFlaskGearThinProps): React.ReactElement;
export default LanFlaskGearThin;
