import React from 'react';

export interface LanReplyTimeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReplyTimeRegular(props: LanReplyTimeRegularProps): React.ReactElement;
export default LanReplyTimeRegular;
