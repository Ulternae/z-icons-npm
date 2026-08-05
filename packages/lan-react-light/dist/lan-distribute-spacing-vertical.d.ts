import React from 'react';

export interface LanDistributeSpacingVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDistributeSpacingVertical(props: LanDistributeSpacingVerticalProps): React.ReactElement;
export default LanDistributeSpacingVertical;
