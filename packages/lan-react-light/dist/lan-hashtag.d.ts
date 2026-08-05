import React from 'react';

export interface LanHashtagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHashtag(props: LanHashtagProps): React.ReactElement;
export default LanHashtag;
