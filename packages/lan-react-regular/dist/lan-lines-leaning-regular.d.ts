import React from 'react';

export interface LanLinesLeaningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinesLeaningRegular(props: LanLinesLeaningRegularProps): React.ReactElement;
export default LanLinesLeaningRegular;
