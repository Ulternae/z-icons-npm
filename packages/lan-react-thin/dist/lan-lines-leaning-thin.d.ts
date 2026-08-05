import React from 'react';

export interface LanLinesLeaningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinesLeaningThin(props: LanLinesLeaningThinProps): React.ReactElement;
export default LanLinesLeaningThin;
