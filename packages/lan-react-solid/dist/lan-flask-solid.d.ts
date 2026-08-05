import React from 'react';

export interface LanFlaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskSolid(props: LanFlaskSolidProps): React.ReactElement;
export default LanFlaskSolid;
