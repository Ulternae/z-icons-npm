import React from 'react';

export interface LanHandPaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPaper(props: LanHandPaperProps): React.ReactElement;
export default LanHandPaper;
