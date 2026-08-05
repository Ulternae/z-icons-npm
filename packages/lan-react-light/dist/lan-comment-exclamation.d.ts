import React from 'react';

export interface LanCommentExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentExclamation(props: LanCommentExclamationProps): React.ReactElement;
export default LanCommentExclamation;
