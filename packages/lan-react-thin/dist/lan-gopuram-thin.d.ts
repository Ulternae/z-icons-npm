import React from 'react';

export interface LanGopuramThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGopuramThin(props: LanGopuramThinProps): React.ReactElement;
export default LanGopuramThin;
