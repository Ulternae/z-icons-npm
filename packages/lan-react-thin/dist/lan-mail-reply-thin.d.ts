import React from 'react';

export interface LanMailReplyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailReplyThin(props: LanMailReplyThinProps): React.ReactElement;
export default LanMailReplyThin;
