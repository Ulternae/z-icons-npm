import React from 'react';

export interface LanPaperPlaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperPlaneSolid(props: LanPaperPlaneSolidProps): React.ReactElement;
export default LanPaperPlaneSolid;
