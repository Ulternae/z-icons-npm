import React from 'react';

export interface LanHandPaperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPaperRegular(props: LanHandPaperRegularProps): React.ReactElement;
export default LanHandPaperRegular;
