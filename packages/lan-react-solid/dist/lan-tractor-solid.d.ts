import React from 'react';

export interface LanTractorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTractorSolid(props: LanTractorSolidProps): React.ReactElement;
export default LanTractorSolid;
