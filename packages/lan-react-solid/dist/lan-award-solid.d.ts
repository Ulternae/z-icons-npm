import React from 'react';

export interface LanAwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAwardSolid(props: LanAwardSolidProps): React.ReactElement;
export default LanAwardSolid;
