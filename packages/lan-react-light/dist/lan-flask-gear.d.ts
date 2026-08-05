import React from 'react';

export interface LanFlaskGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskGear(props: LanFlaskGearProps): React.ReactElement;
export default LanFlaskGear;
