import React from 'react';

export interface LanBookCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookCopy(props: LanBookCopyProps): React.ReactElement;
export default LanBookCopy;
