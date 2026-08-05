import React from 'react';

export interface LanHandPaperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPaperThin(props: LanHandPaperThinProps): React.ReactElement;
export default LanHandPaperThin;
