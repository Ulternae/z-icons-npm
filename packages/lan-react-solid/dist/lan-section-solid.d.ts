import React from 'react';

export interface LanSectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSectionSolid(props: LanSectionSolidProps): React.ReactElement;
export default LanSectionSolid;
