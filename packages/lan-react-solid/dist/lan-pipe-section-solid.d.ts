import React from 'react';

export interface LanPipeSectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeSectionSolid(props: LanPipeSectionSolidProps): React.ReactElement;
export default LanPipeSectionSolid;
