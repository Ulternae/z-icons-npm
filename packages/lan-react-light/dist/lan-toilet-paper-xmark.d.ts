import React from 'react';

export interface LanToiletPaperXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperXmark(props: LanToiletPaperXmarkProps): React.ReactElement;
export default LanToiletPaperXmark;
