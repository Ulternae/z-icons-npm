import React from 'react';

export interface LanHeadSideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideRegular(props: LanHeadSideRegularProps): React.ReactElement;
export default LanHeadSideRegular;
