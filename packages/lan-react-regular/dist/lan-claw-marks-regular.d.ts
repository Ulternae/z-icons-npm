import React from 'react';

export interface LanClawMarksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClawMarksRegular(props: LanClawMarksRegularProps): React.ReactElement;
export default LanClawMarksRegular;
