import React from 'react';

export interface LanChildrenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildrenThin(props: LanChildrenThinProps): React.ReactElement;
export default LanChildrenThin;
