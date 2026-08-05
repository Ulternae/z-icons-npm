import React from 'react';

export interface LanToiletPaperCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperCheckSolid(props: LanToiletPaperCheckSolidProps): React.ReactElement;
export default LanToiletPaperCheckSolid;
