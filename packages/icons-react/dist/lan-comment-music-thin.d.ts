import React from 'react';

export interface LanCommentMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMusicThin: React.FC<LanCommentMusicThinProps>;
export default LanCommentMusicThin;
