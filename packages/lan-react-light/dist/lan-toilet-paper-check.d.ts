import React from 'react';

export interface LanToiletPaperCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperCheck(props: LanToiletPaperCheckProps): React.ReactElement;
export default LanToiletPaperCheck;
