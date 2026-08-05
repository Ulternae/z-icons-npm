import React from 'react';

export interface LanCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCopy(props: LanCopyProps): React.ReactElement;
export default LanCopy;
