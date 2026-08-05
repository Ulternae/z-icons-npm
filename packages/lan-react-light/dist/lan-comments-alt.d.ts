import React from 'react';

export interface LanCommentsAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsAlt(props: LanCommentsAltProps): React.ReactElement;
export default LanCommentsAlt;
