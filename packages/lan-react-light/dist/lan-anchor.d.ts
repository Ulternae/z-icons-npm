import React from 'react';

export interface LanAnchorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchor(props: LanAnchorProps): React.ReactElement;
export default LanAnchor;
