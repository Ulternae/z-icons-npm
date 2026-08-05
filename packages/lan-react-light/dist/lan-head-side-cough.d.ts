import React from 'react';

export interface LanHeadSideCoughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideCough(props: LanHeadSideCoughProps): React.ReactElement;
export default LanHeadSideCough;
