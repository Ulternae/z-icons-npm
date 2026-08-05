import React from 'react';

export interface LanBookCopyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookCopyThin(props: LanBookCopyThinProps): React.ReactElement;
export default LanBookCopyThin;
