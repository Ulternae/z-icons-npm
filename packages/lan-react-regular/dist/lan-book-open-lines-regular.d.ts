import React from 'react';

export interface LanBookOpenLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenLinesRegular(props: LanBookOpenLinesRegularProps): React.ReactElement;
export default LanBookOpenLinesRegular;
