import React from 'react';

export interface LanHatWinterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWinterSolid(props: LanHatWinterSolidProps): React.ReactElement;
export default LanHatWinterSolid;
