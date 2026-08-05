import React from 'react';

export interface LanCommentSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSlashThin(props: LanCommentSlashThinProps): React.ReactElement;
export default LanCommentSlashThin;
