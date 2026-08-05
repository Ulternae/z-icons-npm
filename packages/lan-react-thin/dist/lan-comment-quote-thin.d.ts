import React from 'react';

export interface LanCommentQuoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuoteThin(props: LanCommentQuoteThinProps): React.ReactElement;
export default LanCommentQuoteThin;
