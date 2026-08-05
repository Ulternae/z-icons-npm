import React from 'react';

export interface LanFlaskVialSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskVialSolid(props: LanFlaskVialSolidProps): React.ReactElement;
export default LanFlaskVialSolid;
