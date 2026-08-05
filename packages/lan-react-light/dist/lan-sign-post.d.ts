import React from 'react';

export interface LanSignPostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPost(props: LanSignPostProps): React.ReactElement;
export default LanSignPost;
