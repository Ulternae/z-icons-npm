import React from 'react';

export interface LanReplyTimeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReplyTime(props: LanReplyTimeProps): React.ReactElement;
export default LanReplyTime;
