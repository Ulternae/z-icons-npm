import React from 'react';

export interface LanCopyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCopyThin(props: LanCopyThinProps): React.ReactElement;
export default LanCopyThin;
