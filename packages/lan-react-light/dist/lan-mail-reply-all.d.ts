import React from 'react';

export interface LanMailReplyAllProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailReplyAll(props: LanMailReplyAllProps): React.ReactElement;
export default LanMailReplyAll;
