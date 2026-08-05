import React from 'react';

export interface LanMemoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoSolid(props: LanMemoSolidProps): React.ReactElement;
export default LanMemoSolid;
