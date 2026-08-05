import React from 'react';

export interface LanHeadSideMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideMaskRegular(props: LanHeadSideMaskRegularProps): React.ReactElement;
export default LanHeadSideMaskRegular;
