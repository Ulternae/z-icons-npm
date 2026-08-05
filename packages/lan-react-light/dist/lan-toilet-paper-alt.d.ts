import React from 'react';

export interface LanToiletPaperAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperAlt(props: LanToiletPaperAltProps): React.ReactElement;
export default LanToiletPaperAlt;
