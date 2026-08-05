import React from 'react';

export interface LanCommentQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuoteSolid(props: LanCommentQuoteSolidProps): React.ReactElement;
export default LanCommentQuoteSolid;
