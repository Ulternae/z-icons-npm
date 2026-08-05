import React from 'react';

export interface LanCommentSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSlash(props: LanCommentSlashProps): React.ReactElement;
export default LanCommentSlash;
