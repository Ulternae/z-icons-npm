import React from 'react';

export interface LanMailReplyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMailReplyRegular(props: LanMailReplyRegularProps): React.ReactElement;
export default LanMailReplyRegular;
