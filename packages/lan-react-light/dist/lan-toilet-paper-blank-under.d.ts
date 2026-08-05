import React from 'react';

export interface LanToiletPaperBlankUnderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperBlankUnder(props: LanToiletPaperBlankUnderProps): React.ReactElement;
export default LanToiletPaperBlankUnder;
