import React from 'react';

export interface LanCommentMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMusicRegular: React.FC<LanCommentMusicRegularProps>;
export default LanCommentMusicRegular;
