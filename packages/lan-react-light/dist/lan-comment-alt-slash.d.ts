import React from 'react';

export interface LanCommentAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltSlash(props: LanCommentAltSlashProps): React.ReactElement;
export default LanCommentAltSlash;
