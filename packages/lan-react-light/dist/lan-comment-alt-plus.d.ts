import React from 'react';

export interface LanCommentAltPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltPlus(props: LanCommentAltPlusProps): React.ReactElement;
export default LanCommentAltPlus;
