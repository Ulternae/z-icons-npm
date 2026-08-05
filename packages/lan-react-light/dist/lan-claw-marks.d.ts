import React from 'react';

export interface LanClawMarksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClawMarks(props: LanClawMarksProps): React.ReactElement;
export default LanClawMarks;
