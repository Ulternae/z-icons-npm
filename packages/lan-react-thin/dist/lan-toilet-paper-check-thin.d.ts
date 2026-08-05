import React from 'react';

export interface LanToiletPaperCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperCheckThin(props: LanToiletPaperCheckThinProps): React.ReactElement;
export default LanToiletPaperCheckThin;
