import React from 'react';

export interface LanPaperPlaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperPlaneRegular(props: LanPaperPlaneRegularProps): React.ReactElement;
export default LanPaperPlaneRegular;
