import React from 'react';

export interface LanThumbsDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsDown(props: LanThumbsDownProps): React.ReactElement;
export default LanThumbsDown;
