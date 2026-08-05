import React from 'react';

export interface LanThumbsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsUp(props: LanThumbsUpProps): React.ReactElement;
export default LanThumbsUp;
