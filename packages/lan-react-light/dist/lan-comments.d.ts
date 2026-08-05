import React from 'react';

export interface LanCommentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComments(props: LanCommentsProps): React.ReactElement;
export default LanComments;
