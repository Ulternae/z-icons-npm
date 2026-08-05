import React from 'react';

export interface LanReplyTimeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReplyTimeThin(props: LanReplyTimeThinProps): React.ReactElement;
export default LanReplyTimeThin;
